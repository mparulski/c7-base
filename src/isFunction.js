const toString = Object.prototype.toString

export default value => {
  const strRepresentation = toString.call(value)

  return (
    value !== null &&
    (strRepresentation === '[object Function]' ||
      strRepresentation === '[object AsyncFunction]' ||
      strRepresentation === '[object GeneratorFunction]')
  )
}
