/**
 * Devuelve un nuevo array con los elementos del recibido ordenados de menor a mayor.
 * @param {Number[]} a
 * @returns {Number[]}
 */
function sort (a) {
  const onlyNumbers = a.filter(n => !isNaN(n))

  return onlyNumbers.sort((a, b) => a - b)
}

module.exports = sort
