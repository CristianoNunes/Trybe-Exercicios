const sum = (a, b) => {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    throw new Error('Os parâmetros não são números');
  }
  return a + b;
}

module.exports = sum;
