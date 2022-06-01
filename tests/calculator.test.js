import { add, subtract, multiply, divide } from '../scripts/calculator';

test('It checks if arguments are numbers.', () => {
    expect(add({}, [])).toBe('Please enter valid arguments.');
    expect(subtract({}, [])).toBe('Please enter valid arguments.');
    expect(multiply({}, [])).toBe('Please enter valid arguments.');
    expect(divide({}, [])).toBe('Please enter valid arguments.');
});

test('Accepts numbers in string format.', () => {
    expect(add('3', '2')).toBe(5);
    expect(add(3, '2')).toBe(5);
    expect(subtract('3', '2')).toBe(1);
    expect(subtract(3, '2')).toBe(1);
    expect(multiply('3', '2')).toBe(6);
    expect(multiply(3, '2')).toBe(6);
    expect(divide('4', '2')).toBe(2);
    expect(divide(4, '2')).toBe(2);
});

test('Accepts floating point numbers.', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(subtract(0.2, 0.1)).toBeCloseTo(0.1);
    expect(multiply(0.2, 0.1)).toBeCloseTo(0.02);
    expect(divide(0.4, 0.2)).toBe(2);
});

test('it calculates two integers.', () => {
    expect(add(2, 2)).toBe(4);
    expect(subtract(2, 2)).toBe(0);
    expect(multiply(2, 2)).toBe(4);
    expect(divide(2, 2)).toBe(1);
});

test('It calculates negative and positive integers', () => {
    expect(add(2, -3)).toBe(-1);
    expect(subtract(-2, -3)).toBe(1);
    expect(multiply(-2, -3)).toBe(6);
    expect(divide(-4, -2)).toBe(2);
});

test('It returns NaN if second argument is 0', () => {
    expect(divide(4, 0)).toBe(NaN);
})