const { add } = require('./index.js')

test('2 más 2 es igual a 4', () => {
  expect(add(2, 2))
    .toBe(4)
})
