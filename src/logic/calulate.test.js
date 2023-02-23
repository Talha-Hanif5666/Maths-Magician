import calculate from './calculate';

describe('Button 0', () => {
  test('display 0 when button zero is pressed', () => {
    const op = { next: '0' };
    const expected = {};
    const buttonName = '0';
    const result = calculate(op, buttonName);
    expect(result).toEqual(expected);
  });

  describe('Button AC', () => {
    test('Elemets should be cleared!', () => {
      const opreations = { total: 10, next: 20, operation: '+' };

      const expected = { total: null, next: null, operation: null };
      const buttonName = 'AC';
      const result = calculate(opreations, buttonName);
      expect(result).toEqual(expected);
    });
  });

  describe('Button =', () => {
    test('Elements should show result after pressing = sign', () => {
      const op = { total: 1, next: 2, operation: '+' };
      const expected = { total: '3', next: null, operation: null };
      const buttonName = '=';
      const result = calculate(op, buttonName);
      expect(result).toEqual(expected);
    });
  });

  describe('Button =', () => {
    test('Return empty object if = button pressed without opreation', () => {
      const op = { total: 1, next: 2, operation: null };
      const expected = {};
      const buttonName = '=';
      const result = calculate(op, buttonName);
      expect(result).toEqual(expected);
    });
  });

  describe('Button +/-', () => {
    test('Return inverted valeue', () => {
      const op = { total: '2' };
      const expected = { total: '-2' };
      const buttonName = '+/-';
      const result = calculate(op, buttonName);
      expect(result).toEqual(expected);
    });
  });
});
