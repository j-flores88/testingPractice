function reverse(str) {
    if (typeof(str) !== "string" || str.length === 0) return 'Please enter valid string.';
    return str.split('').reverse().join('');
};

module.exports = reverse;