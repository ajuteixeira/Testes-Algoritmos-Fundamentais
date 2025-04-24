function somarNumeros(numero1, numero2) {
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    throw new TypeError('Ambos os parâmetros devem ser números.');
  }
  return numero1 + numero2;
}
module.exports = somarNumeros;