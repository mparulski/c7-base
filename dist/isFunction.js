'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
var toString = Object.prototype.toString

var _default = function _default(value) {
  var description = toString.call(value)
  return (
    value !== null &&
    (description === '[object Function]' ||
      description == '[object AsyncFunction]' ||
      description === '[object GeneratorFunction]')
  )
}

exports.default = _default
