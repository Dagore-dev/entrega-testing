/**
 * Recibe un número y devuelve el valor de la sucesión de Fibonacci en esa posición.
 * @param {Number} number
 * @returns {Number}
 */
function fibonacci (number) {
  number = parseInt(number)

  if (number < 0) {
    throw new Error('No puedo procesar un número negativo')
  }

  if (number < 2) {
    return number
  }

  return fibonacci(number - 2) + fibonacci(number - 1)
}

module.exports = {
  fibonacci
}
