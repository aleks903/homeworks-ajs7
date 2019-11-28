import fetchData from './http';
import getLevel from './app.js';

jest.mock('./http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Тест Mocki', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('Тест Mocki2', () => {
  fetchData.mockReturnValue({ status: 'ok' });
  expect(getLevel(1)).toContain('Ваш текущий уровень:');
});
