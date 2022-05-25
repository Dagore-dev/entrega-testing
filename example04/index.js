/**
 * Cuenta el número de palabras de la cadena que recibe como argumento.
 * @param {String} s
 */
function countWords (s) {
  if (s.length !== 0) {
    const sanitize = cleanString(s)
    const wordsArray = sanitize.split(' ')
    const cleanedWordsArray = wordsArray.filter(s => s.length > 0)
    return cleanedWordsArray.length
  }

  return 0
}

/**
 * Elimina caracteres que no sean letras o espacios.
 * @param {String} s
 * @returns {String}
 */
function cleanString (s) {
  s = s.toLowerCase()
  let cleaned = ''

  for (const char of s) {
    if (char !== char.toUpperCase() || char === ' ') {
      cleaned += char
    }
  }

  return cleaned
}

module.exports = countWords
