var Through = require('through')

var ignore = ['INPUT', 'TEXTAREA', 'SELECT']

module.exports = function KeyRead(){
  var keyread = Through()

  function send(e){
    var el = document.activeElement
    if (!el || (!~ignore.indexOf(el.nodeName) && el.contentEditable !== 'true')){
      keyread.write(e)
    }
  }

  document.addEventListener('keydown', send)
  document.addEventListener('keyup', send)

  return keyread
}