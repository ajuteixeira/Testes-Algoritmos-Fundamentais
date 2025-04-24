const inverterString = require('../src/inverterString');
test('Deve retornar "odnum" para "mundo"', () => {
  expect(inverterString('mundo')).toBe('odnum');
});
test('Deve lançar erro se o parâmetro não for uma string', () => {
  expect(() => inverterString(123)).toThrow('O parâmetro deve ser uma string.');
});