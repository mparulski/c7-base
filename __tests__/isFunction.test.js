import isFunction from '../src/isFunction'

it('Should return `true` for value classified as a `function object`', () => {
  expect(isFunction(function() {})).toBeTruthy()
  expect(isFunction(() => {})).toBeTruthy()
  expect(isFunction(async function() {})).toBeTruthy()
  expect(isFunction(function* foo() {})).toBeTruthy()
})

it('Should return `false` for not `function object` values', () => {
  expect(isFunction()).toBeFalsy()
  expect(isFunction(null)).toBeFalsy()
  expect(isFunction({})).toBeFalsy()
  expect(isFunction('')).toBeFalsy()
  expect(isFunction(new Promise(() => {}))).toBeFalsy()
})
