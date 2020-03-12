var Through = require('through')
var keycode = require('keycode')
var KeyStream = require('./key_stream')

module.exports = function(options){
    options = options || {}

    var currentOffset = options.offset || 0
    var currentVelocity = options.velocity || 127
    var chan = options.channel || 0
  
    var modes = {
      'piano': {
        notes: "AWSEDFTGYHUJKOLP;['".toLowerCase().split(''),
        offsetBy: 12,
        offset: ['z', 'x'],
        velocity: ['c', 'v']
      },
      'grid': {
        notes: 'QWERTYUIASDFGHJKZXCVBNM,'.toLowerCase().split(''),
        offsetBy: 8,
        offset: ['-', '='],
        velocity: ['[', ']']
      }
    }
}