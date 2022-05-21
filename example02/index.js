function arraySummary (array) {
  const initialValue = {
    sum: 0,
    multiply: 1,
    numberCount: 0,
    longestString: '',
    and: true,
    or: false
  }

  const summary = array.reduce(aggregate, initialValue)
  summary.mean = summary.sum / summary.numberCount

  return treeShake(summary)
}

function aggregate ({ sum, multiply, numberCount, longestString, and, or }, current) {
  switch (typeof current) {
    case 'number':
      sum += current
      multiply *= current
      numberCount++
      break

    case 'string':
      if (longestString.length < current.length) longestString = current
      break

    case 'boolean':
      and = and && current
      or = or || current
      break

    default:
      break
  }

  return {
    sum,
    multiply,
    numberCount,
    longestString,
    and,
    or
  }
}

function treeShake (obj) {
  if (obj.numberCount === 0) {
    delete obj.sum
    delete obj.multiply
    delete obj.numberCount
    delete obj.mean
  }

  if (obj.longestString === '') {
    delete obj.longestString
  }

  if (obj.and && !obj.or) {
    delete obj.and
    delete obj.or
  }

  return obj
}

module.exports = {
  arraySummary
}
