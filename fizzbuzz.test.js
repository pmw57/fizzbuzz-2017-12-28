const fizzbuzz = require('./fizzbuzz');

test('does nothing with no argument', () => {
  expect(fizzbuzz()).toBeUndefined();
});