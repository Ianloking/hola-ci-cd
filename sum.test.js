const sum = require('./sum'); // ✔ Usa require en lugar de import

test('sumar 2 + 2 debe ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});