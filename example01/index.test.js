const { add } = require('./index.js')

describe('Probando sumas con la función add', () => {
  it('2 más 2 es igual a 4', () => {
    expect(add(2, 2))
      .toBe(4)
  })

  it('2 + -2 es igual a 0', () => {
    expect(add(2, -2))
      .toBe(0)
  })

  it('"2" + 2 es igual a 4', () => {
    expect(add('2', 2))
      .toBe(4)
  })

  it('add(2) es igual a NaN', () => {
    expect(add(2))
      .toBe(NaN)
  })

  it('add(2, 2, 2) es igual a 4', () => {
    expect(add(2, 2, 2))
      .toBe(4)
  })

  it('"hola" + 2 es igual a NaN', () => {
    expect(add('hola', 2))
      .toBe(NaN)
  })

  it('2 + undefined es igual a NaN', () => {
    expect(add(2, undefined))
      .toBe(NaN)
  })

  it('2 + null es igual a 2', () => {
    expect(add(2, null))
      .toBe(2)
  })

  it('null + 2 es igual a 2', () => {
    expect(add(2, null))
      .toBe(2)
  })
})
