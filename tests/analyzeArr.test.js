const analyzeArr = require('../scripts/analyzeArr');

test('It makes sure an array was passed in', () => {
    expect(analyzeArr('string')).toBe('Please pass in valid array.');
});

test('Returns an object with avg, min, max & length.', () => {
    expect(analyzeArr([1, 2, 3])).toStrictEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    });
});

test('Allows arrays with non numerical values', () => {
    expect(analyzeArr([1, 2, 3, 'b'])).toStrictEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 4
    });
});

test('Counts non-numerical values when calculating length.', () => {
    expect(analyzeArr(['a', 1, 2, 3, 'b'])).toStrictEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 5
    });
});

test('Allows non-sorted arrays', () => {
    expect(analyzeArr([3, 1, 2])).toStrictEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    });
});