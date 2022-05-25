const sort = require('./index.js')

describe('Sort array de números', () => {
  it('Un array vacío devuelve un array vacío', () => {
    expect(sort([]))
      .toHaveLength(0)
  })

  it('[1, 0, 1, 0] devuelve [0, 0, 1, 1]', () => {
    const input = [1, 0, 1, 0]
    const output = [0, 0, 1, 1]
    expect(sort(input))
      .toEqual(output)
  })

  it('[1, 3, 2, "siete", 2.5, 5, 1, 3]', () => {
    const input = [1, 3, 2, 'siete', 2.5, 5, 1, 3]
    const output = [1, 1, 2, 2.5, 3, 3, 5]
    expect(sort(input))
      .toEqual(output)
  })

  it('["hola", "qué", "tal"] devuelve []', () => {
    const input = ['hola', 'qué', 'tal']
    expect(sort(input))
      .toHaveLength(0)
  })

  it('"Lorem ipsum" lanza un error', () => {
    const input = 'Lorem ipsum'
    expect(() => sort(input))
      .toThrow()
  })
})
