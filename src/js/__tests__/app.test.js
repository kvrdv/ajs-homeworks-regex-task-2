import validateNumber from '../app';

test('Проверка телефона 8 (927) 000-00-00', () => {
  const received = validateNumber('8 (927) 000-00-00');
  const expected = '+79270000000';
  expect(received).toBe(expected);
});

test('Проверка телефона +7 960 000 00 00', () => {
  const received = validateNumber('+7 960 000 00 00');
  const expected = '+79600000000';
  expect(received).toBe(expected);
});

test('Проверка телефона +86 000 000 0000', () => {
  const received = validateNumber('+86 000 000 0000');
  const expected = '+860000000000';
  expect(received).toBe(expected);
});

test('Проверка телефона +36 000 000 0000', () => {
  expect(() => { validateNumber('+36 000 000 0000'); }).toThrow();
});
