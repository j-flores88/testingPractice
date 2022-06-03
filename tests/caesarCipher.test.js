const caesarCipher = require('../scripts/caesarCipher');

test('It checks if a string is passed in.', () => {
    expect(caesarCipher(123, 1)).toBe('Please enter a valid string.');
});

test('It checks if shift is a number', () => {
    expect(caesarCipher('string', 'g')).toBe('Please enter a valid number.');
});

test('It returns a string', () => {
    expect(caesarCipher('', 2)).toBe('');
});

test('It encrypts a string.', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('It decrypts a string (allows negative shift).', () => {
    expect(caesarCipher('abc', -2)).toBe('yza');
});

test('It keeps the same case.', () => {
    expect(caesarCipher('AbC', 1)).toBe('BcD');
});

test('It keeps punctuation.', () => {
    expect(caesarCipher('Code!', 1)).toBe('Dpef!');
});