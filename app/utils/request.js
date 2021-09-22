export const badRequest = (cb) => ({ status }) => {
  if (status === 400) cb()
}
export const notFound = (cb) => ({ status }) => {
  if (status === 404) cb()
}

export const loadLazyScript = (file) => {
  //TODO: Use afterRender?
  setTimeout(() => {
    if (!document.getElementById(file)) { //TODO: Pensar mejor este if
      const _script = document.createElement('script')
      _script.type = 'text/javascript'
      _script.src = `assets/${file}`
      _script.id = file
      const _head = document.getElementsByTagName("head")[0]
      _head.appendChild(_script)
    }
  }, 1)
}