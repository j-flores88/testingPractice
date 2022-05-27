const reverse = require('../scripts/reverse');

test('Checks input is string.', () => {
    expect(reverse(null)).toBe('Please enter valid string.');
    expect(reverse(undefined)).toBe('Please enter valid string.');
    expect(reverse(123)).toMatch('Please enter valid string.');
    expect(reverse({ 0: 0 })).toMatch('Please enter valid string.');
    expect(reverse([1, 2, 3])).toMatch('Please enter valid string.');
});

test('Returns reversed string.', () => {
    expect(reverse('racecar')).toMatch('racecar');
});