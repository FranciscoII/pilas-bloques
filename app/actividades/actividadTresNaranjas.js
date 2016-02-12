/* globals TresNaranjas */
import bloques from 'pilas-engine-bloques/actividades/bloques';
import direcciones from 'pilas-engine-bloques/actividades/direccionesCuadricula';
import comer from 'pilas-engine-bloques/actividades/comer';
import tocando from 'pilas-engine-bloques/actividades/tocando';

var {Repetir,Si,Procedimiento} = bloques;
var {IrDerecha} = direcciones;
var {ComerNaranja} = comer;
var {TocandoNaranja} = tocando;
var actividadTresNaranjas = {
  nombre: 'Tres naranjas',
  id: 'TresNaranjas',
  enunciado: 'El alien debe comer todos los gajos de naranja que aparezcan en las casillas violetas. ¡Pero no siempre aparecen en los mismos lugares ni la misma cantidad de naranjas! Pista: pensá primero cómo harías un procedimiento para comer una sola naranja si se que hay.',

  escena: TresNaranjas,
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,
  procedimientos: [Procedimiento],
  variables: [],
  control: [Repetir,Si],
  expresiones: [],
  acciones: [IrDerecha,ComerNaranja],
  sensores: [TocandoNaranja]
};
export default actividadTresNaranjas;
