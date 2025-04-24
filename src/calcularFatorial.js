function calcularFatorial(numero) {
  if (typeof numero !== 'number' || !Number.isInteger(numero)) {
    throw new TypeError('O parâmetro deve ser um número inteiro.');
  }
  if (numero < 0) {
    throw new RangeError('O número deve ser não negativo.');
  }
  if (numero === 0 || numero === 1) {
    return 1;
  }
  return numero * calcularFatorial(numero - 1);
}
module.exports = calcularFatorial;