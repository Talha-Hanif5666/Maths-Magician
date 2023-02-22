import calculate from './calculate';

describe('Button 0', () => {
  test('display 0 when button zero is pressed', () => {
    const op = { next: '0' };
    const expected = {};
    const buttonName = '0';
    const result = calculate(op, buttonName);
    expect(result).toEqual(expected);
  });
});
