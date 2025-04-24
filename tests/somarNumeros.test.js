const somarNumeros = require('../src/somarNumeros');
test('Deve retornar 5 para os números 2 e 3', () => {
  expect(somarNumeros(2, 3)).toBe(5);
});
test('Deve lançar erro quando um dos parâmetros não for número', () => {
  expect(() => somarNumeros(2, '3')).toThrow('Ambos os parâmetros devem ser números.');
});