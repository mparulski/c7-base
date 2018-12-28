const toString = Object.prototype.toString

export default value => {
  const description = toString.call(value)

  return (
    value !== null &&
    (description === '[object Function]' ||
      description == '[object AsyncFunction]' ||
      description === '[object GeneratorFunction]')
  )
}
