import { helloWorld } from '../src/greet';

test('basic', () => {
  expect(helloWorld('John')).toBe('Hello John');
});
