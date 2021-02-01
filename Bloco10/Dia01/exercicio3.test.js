const mySum = require('./exercicio3');

describe('mySum', () => {
  test('the sum of the array [1, 2, 3, 4] is 10', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
  });

  test('the sum of the array [1, -2, -3, 4] is 0', () => {
    expect(mySum([1, -2, -3, 4])).toBe(0);
  })
});