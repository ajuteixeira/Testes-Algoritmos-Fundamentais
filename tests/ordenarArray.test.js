const ordenarArray = require('../src/ordenarArray');
test('Deve ordenar o array [3, 1, 2] para [1, 2, 3]', () => {
  expect(ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
});
test('Deve lançar erro se o array contiver elementos não numéricos', () => {
  expect(() => ordenarArray([1, '2', 3])).toThrow('Todos os elementos do array devem ser números.');
});