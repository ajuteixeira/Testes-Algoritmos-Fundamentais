function ordenarArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('O parâmetro deve ser um array.');
  }
  if (!array.every(item => typeof item === 'number')) {
    throw new TypeError('Todos os elementos do array devem ser números.');
  }
  return [...array].sort((a, b) => a - b);
}
module.exports = ordenarArray;