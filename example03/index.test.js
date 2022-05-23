const { fibonacci } = require('./index.js')

describe('Valor concreto de la succesión de Fibonacci', () => {
  it('El primer valor es 0', () => {
    expect(fibonacci(0))
      .toBe(0)
  })

  it('El segundo valor es 1', () => {
    expect(fibonacci(1))
      .toBe(1)
  })

  it('El tercer valor vuelve a ser 1', () => {
    expect(fibonacci(2))
      .toBe(1)
  })

  it('El cuarto valor es 2, resultado de sumar fibonacci(2) y fibonacci(1)', () => {
    expect(fibonacci(3))
      .toBe(fibonacci(2) + fibonacci(1))
  })

  it('El quinto valor es 3, resultado de sumar fibonacci(3) y fibonacci(2)', () => {
    expect(fibonacci(4))
      .toBe(fibonacci(3) + fibonacci(2))
  })

  it('Un número negativo lanza un error', () => {
    expect(() => fibonacci(-1))
      .toThrow()
  })

  it('Un número decimal es redondeado', () => {
    expect(fibonacci(1.75))
      .toBe(fibonacci(2))
  })

  it('Un número decimal es redondeado hacia arriba', () => {
    expect(fibonacci(1.5))
      .toBe(fibonacci(2))
  })

  it('Acepta strings si se pueden convertir a enteros', () => {
    expect(fibonacci('5'))
      .toBe(fibonacci(5))
  })

  it('Lanza un error si recibe un string que no puede convertir a entero', () => {
    expect(() => fibonacci('patata'))
      .toThrow()
  })
})
