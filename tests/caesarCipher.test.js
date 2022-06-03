const caesarCipher = require('../scripts/caesarCipher');

test('It checks if a string is passed in.', () => {
    expect(caesarCipher(123, 1)).toBe('Please enter a valid string.');
});

test('It checks if shift is a number', () => {
    expect(caesarCipher('string', 'g')).toBe('Please enter a valid number.');
});

test('It returns a string', () => {
    expect(caesarCipher('string', 2)).toBe('');
});