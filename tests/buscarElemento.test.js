const buscarElemento = require('../src/buscarElemento');
test('Deve retornar o índice 1 para o elemento 2 no array [1, 2, 3]', () => {
  expect(buscarElemento([1, 2, 3], 2)).toBe(1);
});
test('Deve retornar -1 se o elemento não estiver no array', () => {
  expect(buscarElemento([1, 2, 3], 4)).toBe(-1);
});