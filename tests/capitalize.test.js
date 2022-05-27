const capitalize = require('../scripts/capitalize');

test('Checks input is string.', () => {
    expect(capitalize(123)).toBe('Please enter valid string.');
    expect(capitalize({ 0: 0 })).toBe('Please enter valid string.');
    expect(capitalize([1, 2, 3])).toBe('Please enter valid string.');
})

test('Checks for valid string length.', () => {
    expect(capitalize('')).toBe('Please enter valid string.');
});

test('Capitalizes the first letter of a string.', () => {
    expect(capitalize('first test.')).toBe('First test.');
});

test('Fixes Camelcase & Uppercase strings.', () => {
    expect(capitalize('CaMeLcAsE tEst.')).toBe('Camelcase test.');
    expect(capitalize('UPPERCASE TEST.')).toBe('Uppercase test.')
});