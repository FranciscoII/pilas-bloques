import Service, { inject as service } from '@ember/service'
import { entryPointType, getName, getParams, getChild, getBlockSiblings, isOperator, isValue, isProcedureCall } from '../utils/blocks'
import { parseExpect, expectationId } from '../utils/expectations'
// TODO: Move out from 'services' folder
import { createNode, createReference, createEmptyNode } from './pilas-ast'



export default Service.extend({
  activityExpectations: service(),
  intl: service(),
  
  /**
   * @return ExpectationResult
   * {
   *  id: expectation id
   *  expect: translated expectation name [string]
   *  result: if the program pass de expect [boolean]
   *  declaration: blockId
   *  ... other specific params
   * }
   */
  async analyze(workspace, activity) {
    const activityExpectation = this.activityExpectations.expectationFor(activity)
    const customExpect = activityExpectation(workspace)
    const ast = this.parseAll(workspace)
    var results

    try {
      // customExpect takes a lot of time. 
      results = mulang.astCode(ast).customExpect(customExpect)
    } catch (e) {
      // mulang errors should not affect normal application usage
      results = []
      console.error(e)
    }
    
    return results.map(toTranslatedResult)
  },

  parseAll(workspace) {
    const astNodes = workspace.getTopBlocks().map(this.parse)
    return createNode("Sequence", astNodes)
  },

  parse(mainBlock) {
    return buildBlockAst(mainBlock)
  },

})

/**
 * @param {[Expect,Result]} pair is a pair of Mulang expectation and result
 * @returns a Pilas Bloques Expectation object
 */
function toTranslatedResult([expect, result]) {
  const [name, params] = parseExpect(expect)
  return { 
    id: expectationId(name), 
    description: this.intl.t(name, {result, ...params}).toString(), 
    result, 
    ...params }
}

function buildBlockAst(block) {
  if (block.isShadow()) return createEmptyNode()
  let { tag, parse } = mulangParser(block)
  return createNode(tag, parse(block))
}

function mulangParser(block) {
  let parser = pilasToMulangParsers[block.type] || searchAlias(block)
  if (parser) return parser
  return isValue(block) ? referenceParser : applicationParser
}

function searchAlias(block) {
  for (const alias of Blockly.aliases(block.type)) {
    if (pilasToMulangParsers[alias]) {
      return pilasToMulangParsers[alias]
    }
  }
}

let entryPointParser = {
  tag: "EntryPoint",
  parse: parseEntryPoint
}

let repeatParser = {
  tag: "Repeat",
  parse: parseRepeat
}

let ifParser = {
  tag: "If",
  parse: parseIf
}

let untilParser = {
  tag: "While",
  parse: parseUntil
}

let numberParser = {
  tag: "MuNumber",
  parse: parseMuNumber
}

let procedureParser = {
  tag: "Procedure",
  parse: parseProcedure
}

let referenceParser = {
  tag: "Reference",
  parse: parseReference
}

let applicationParser = {
  tag: "Application",
  parse: parseApplication
}


let pilasToMulangParsers = {
  [entryPointType]: entryPointParser,
  "repetir": repeatParser,
  "Si": ifParser,
  "SiNo": { ...ifParser, parse: parseIfElse },
  "Hasta": untilParser,
  "math_number": numberParser,
  "Numero": numberParser,
  "procedures_defnoreturn": procedureParser,
  "variables_get": { ...referenceParser, parse: parseVariable }
}

function buildSequenceAst(firstBlock) {
  if (!firstBlock || firstBlock.isShadow()) return createEmptyNode()
  let siblings = getBlockSiblings(firstBlock).filter(block => !block.isShadow())
  if (siblings.length) {
    return createNode("Sequence", [firstBlock, ...siblings].map(b => buildBlockAst(b)))
  } else {
    return buildBlockAst(firstBlock)
  }
}

function parseMuNumber(block) {
  return parseFloat(block.getFieldValue("NUM"))
}

function parseEntryPoint(block) {
  return [
    block.type,
    buildSequenceAst(getChild(block))
  ]
}

function referenceName(block) {
  return isProcedureCall(block) ? block.getFieldValue('NAME')
    : isOperator(block) ? block.getFieldValue('OP')
      : block.type
}

function parseApplication(block) {
  return [
    createReference(referenceName(block)),
    parseArguments(block)
  ]
}

function parseReference(block) {
  return referenceName(block)
}

function parseVariable(block) {
  return block.getFieldValue("VAR")
}

function parseArguments(block) {
  return block.inputList
    .filter(input => input.type == Blockly.INPUT_VALUE)
    .map(input => input.connection.targetBlock())
    .map(b => buildBlockAst(b))
    .concat(...parseText(block))
}

function parseText(block) {
  let text = block.getFieldValue("texto") // TODO: Mega-hard-coded?
  if (!text) return []
  return [createNode("MuString", text)]
}

function parseRepeat(block) {
  let countBlock = block.getInputTargetBlock("count")
  let statements = block.getInputTargetBlock("block")
  return [
    buildBlockAst(countBlock),
    buildSequenceAst(statements)
  ]
}

function parseUntil(block) {
  let condition = block.getInputTargetBlock("condition")
  let statements = block.getInputTargetBlock("block")
  return [
    negate(buildBlockAst(condition)),
    buildSequenceAst(statements)
  ]
}

function parseIf(block) {
  let condition = block.getInputTargetBlock("condition")
  let statements = block.getInputTargetBlock("block")
  return [
    buildBlockAst(condition),
    buildSequenceAst(statements),
    createEmptyNode()
  ]
}

function parseIfElse(block) {
  let condition = block.getInputTargetBlock("condition")
  let statementsIf = block.getInputTargetBlock("block1")
  let statementsElse = block.getInputTargetBlock("block2")
  return [
    buildBlockAst(condition),
    buildSequenceAst(statementsIf),
    buildSequenceAst(statementsElse)
  ]
}

function parseProcedure(block) {
  return [
    getName(block),
    createNode("Equation", parseEquation(block))
  ]
}

function parseEquation(block) {
  return [
    parseEquationParams(block),
    parseEquationBody(block)
  ]
}

function parseEquationParams(block) {
  return getParams(block).map(argument => createNode("VariablePattern", argument))
}

function parseEquationBody(block) {
  let bodyContents = buildSequenceAst(getChild(block))
  return createNode("UnguardedBody", bodyContents)
}

function negate(condition) {
  return {
    tag: "Application",
    contents: [{ tag: "Primitive", contents: "Negation" }, [condition]]
  }
}