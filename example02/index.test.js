const { arraySummary } = require('./index.js')

describe('Resumen array', () => {
  it('Un array vacío devuelve un objeto vacío', () => {
    expect(arraySummary([]))
      .toEqual({})
  })

  describe('Array solo de números', () => {
    const numbers = [0, 5, 3, -3, 1]
    const output = arraySummary(numbers)

    it('Un array de números devuelve un objeto con las propiedades sum, multiply, numberCount y mean', () => {
      expect(output).toHaveProperty('sum')
      expect(output).toHaveProperty('multiply')
      expect(output).toHaveProperty('numberCount')
      expect(output).toHaveProperty('mean')
    })

    it('Un array de números devuelve un objeto que no tiene las propiedades longestString, and y or', () => {
      expect(output).not.toHaveProperty('longestString')
      expect(output).not.toHaveProperty('and')
      expect(output).not.toHaveProperty('or')
    })

    it(`La suma de ${numbers} es igual a 6`, () => {
      expect(output)
        .toHaveProperty('sum', 6)
    })

    it(`La multiplicación de ${numbers} es igual a -0`, () => {
      expect(output)
        .toHaveProperty('multiply', -0)
    })

    it(`El total de números de ${numbers} es ${numbers.length}`, () => {
      expect(output)
        .toHaveProperty('numberCount', numbers.length)
    })

    it(`La media de ${numbers} es igual a 1.2`, () => {
      expect(output)
        .toHaveProperty('mean', 1.2)
    })
  })

  describe('Array solo de cadenas de texto', () => {
    const strings = ['hola', 'me', 'llamo', 'David', 'etc']
    const output = arraySummary(strings)

    it('Un array de strings devuelve un objeto con la propiedad longestString', () => {
      expect(output).toHaveProperty('longestString')
    })

    it('Un array de strings devuelve un objeto que no tiene las propiedades sum, multiply, numberCount, mean, and y or', () => {
      expect(output).not.toHaveProperty('sum')
      expect(output).not.toHaveProperty('multiply')
      expect(output).not.toHaveProperty('numberCount')
      expect(output).not.toHaveProperty('mean')
      expect(output).not.toHaveProperty('and')
      expect(output).not.toHaveProperty('or')
    })

    it('El string más largo de la cadena es "llamo"', () => {
      expect(output)
        .toHaveProperty('longestString', 'llamo')
    })
  })

  describe('Array solo de boleanos', () => {
    const booleans = [true, true, false, true]
    const booleansAllTrue = [true, true, true, true]
    const booleansAllFalse = [false, false, false, false]
    const output = arraySummary(booleans)

    it('Un array de números devuelve un objeto con las propiedades and y or', () => {
      expect(output).toHaveProperty('and')
      expect(output).toHaveProperty('or')
    })

    it('Un array de números devuelve un objeto que no tiene las propiedades longestString, and y or', () => {
      expect(output).not.toHaveProperty('sum')
      expect(output).not.toHaveProperty('multiply')
      expect(output).not.toHaveProperty('numberCount')
      expect(output).not.toHaveProperty('mean')
      expect(output).not.toHaveProperty('longestString')
    })

    it(`La operación AND en ${booleans} es igual a false`, () => {
      expect(output)
        .toHaveProperty('and', false)
    })

    it(`La operación AND en ${booleansAllTrue} es igual a true`, () => {
      expect(arraySummary(booleansAllTrue))
        .toHaveProperty('and', true)
    })

    it(`La operación OR en ${booleans} es igual a true`, () => {
      expect(output)
        .toHaveProperty('or', true)
    })

    it(`La operación OR en ${booleansAllFalse} es igual a false`, () => {
      expect(arraySummary(booleansAllFalse))
        .toHaveProperty('or', false)
    })
  })

  describe('Array con distintos tipos de datos', () => {
    const mixedTypes = [false, 2, '2', 'siete', 'josé', true, 1]
    const output = arraySummary(mixedTypes)

    it('El objeto resultante tiene las propiedades sum, multiply, numberCount, mean, longestString, and y or', () => {
      expect(output).toHaveProperty('sum')
      expect(output).toHaveProperty('multiply')
      expect(output).toHaveProperty('numberCount')
      expect(output).toHaveProperty('mean')
      expect(output).toHaveProperty('longestString')
      expect(output).toHaveProperty('and')
      expect(output).toHaveProperty('or')
    })

    it('El objeto resultante hace correctamente las operaciones con números', () => {
      expect(output).toHaveProperty('sum', 3)
      expect(output).toHaveProperty('multiply', 2)
      expect(output).toHaveProperty('numberCount', 2)
      expect(output).toHaveProperty('mean', 1.5)
    })

    it('El objeto resultante determina correctamente la cadena más larga', () => {
      expect(output).toHaveProperty('longestString', 'siete')
    })

    it('La operación AND resulta false y la operación OR resulta true', () => {
      expect(output).toHaveProperty('and', false)
      expect(output).toHaveProperty('or', true)
    })
  })
})
