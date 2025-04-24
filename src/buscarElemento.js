function buscarElemento(array, elemento) {
  if (!Array.isArray(array)) {
    throw new TypeError('O primeiro parâmetro deve ser um array.');
  }
  return array.indexOf(elemento);
}
module.exports = buscarElemento;