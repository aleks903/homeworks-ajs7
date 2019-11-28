import colorHealth from './app.js';

test('Здоровья более 50', () => {
  const userObj = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = colorHealth(userObj);

  expect(received).toBe(expected);
});

test('Здоровья от 50 до 15', () => {
  const userObj = { name: 'Маг', health: 45 };
  const expected = 'wounded';
  const received = colorHealth(userObj);

  expect(received).toBe(expected);
});

test('Здоровья менее 15', () => {
  const userObj = { name: 'Маг', health: 14 };
  const expected = 'critical';
  const received = colorHealth(userObj);

  expect(received).toBe(expected);
});
