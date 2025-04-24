const verificarNumeroPrimo = require('../src/verificarNumeroPrimo');
test('Deve retornar true para número primo 7', () => {
  expect(verificarNumeroPrimo(7)).toBe(true);
});
test('Deve retornar false para número não primo 8', () => {
  expect(verificarNumeroPrimo(8)).toBe(false);
});