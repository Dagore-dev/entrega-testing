const countWords = require('./index.js')

describe('Cuenta palabras', () => {
  it('Un string vacío contiene 0 palabras', () => {
    expect(countWords(''))
      .toBe(0)
  })

  it('El string "hola mundo" contiene 2 palabras', () => {
    expect(countWords('hola mundo'))
      .toBe(2)
  })

  it('El string "  hola mundo  " contiene 2 palabras', () => {
    expect(countWords('  hola mundo  '))
      .toBe(2)
  })

  it('El string "  hola   mundo  desde   javacript " contiene 4 palabras', () => {
    expect(countWords('  hola   mundo  desde   javacript '))
      .toBe(4)
  })

  it('El string "Hola, me llamo David. ¿Cómo te llamas?"', () => {
    expect(countWords('Hola, me llamo David. ¿Cómo te llamas?'))
      .toBe(7)
  })
})
