const myIndexOf = require('./exercicio2');

describe('myIndefOf', () => {
  const a = [1, 2, 3, 4];

  test('returns the item index when the array contains the item', () => {
    expect(myIndexOf(a, 3)).toBe(2);
  });

  test('return -1 if the array does not contain the item', () => {
    expect(myIndexOf(a, 5)).toBe(-1);
  });
});