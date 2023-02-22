import operate from './operate';

describe('Addition', () => {
  test('should Multiply 4 and 7 tobe equal 28', () => {
    const result = operate(4, 7, 'x');
    expect(result).toBe('28');
  });

  describe('Multiplication', () => {
    test('should Multiply Product 2 and 3 tobe equal 6', () => {
      const result = operate(2, 3, 'x');
      expect(result).toBe('6');
    });
  });

  describe('Substraction', () => {
    test('should substract  15 and 30 tobe equal -15', () => {
      const result = operate(15, 30, '-');
      expect(result).toBe('-15');
    });
  });

  describe('Division', () => {
    test('should divide  36 by 10 tobe equal 3.6', () => {
      const result = operate(36, 10, '÷');
      expect(result).toBe('3.6');
    });
  });

  describe('Modulos', () => {
    test('should find the reminder of 10 modulo 5 tobe equals 0', () => {
      const result = operate(10, 5, '%');
      expect(result).toBe('0');
    });
  });
});
