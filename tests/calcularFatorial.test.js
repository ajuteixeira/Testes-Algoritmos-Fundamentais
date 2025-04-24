const calcularFatorial = require('../src/calcularFatorial');
test('Deve retornar 120 para o fatorial de 5', () => {
  expect(calcularFatorial(5)).toBe(120);
});
test('Deve lançar erro para número negativo', () => {
  expect(() => calcularFatorial(-1)).toThrow('O número deve ser não negativo.');
});