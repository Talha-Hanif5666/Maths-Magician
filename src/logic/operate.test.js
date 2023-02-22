import operate from './operate';

describe('Addition', () => {
  test('should Multiply 4 and 7 tobe equal 28', () => {
    const result = operate(4, 7, 'x');
    expect(result).toBe('28');
  });
});
