
describe('calculateMonthlyPayment() test', () => {
  it('should calculate the monthly rate correctly', () => {
    let values = {
      amount: 10000,
      years: 8,
      rate: 5
    }
    expect(calculateMonthlyPayment(values)).toBe('126.60');
    expect(parseFloat(calculateMonthlyPayment(values))).not.toBeNaN();
  })

  it('should return NaN', function() {
    let values = {
      amount: 'hello',
      years: 0,
      rate: true
    }
    expect(parseFloat(calculateMonthlyPayment(values))).toBeNaN();
    expect(parseFloat(calculateMonthlyPayment(values))).toBeFalsy();
  })

  it('should calculate big loan', () => {
    let values = {
      amount: 100000,
      years: 20,
      rate: 9,
    }
    expect(calculateMonthlyPayment(values)).toBe('899.73');
    expect(calculateMonthlyPayment(values)).toBeDefined();
  })
})

describe('testing 2 decimal places', () => {

  it("should return a result with 2 decimal places", function() {
    let values = {
      amount: 36000,
      years: 3,
      rate: 6.6
    }
    expect(calculateMonthlyPayment(values)).toBe('1105.00');
    expect(calculateMonthlyPayment(values)).toContain('.');
    expect((calculateMonthlyPayment(values)).length).toBe(7);
  });
})

afterEach(() => {
  values = {};
})