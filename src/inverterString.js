function inverterString(texto) {
  if (typeof texto !== 'string') {
    throw new TypeError('O parâmetro deve ser uma string.');
  }
  return texto.split('').reverse().join('');
}
module.exports = inverterString;