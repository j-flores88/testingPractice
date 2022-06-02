function caesarCipher(str, shift) {
    let newStr = '';
    if (typeof(str) !== 'string') return 'Please enter a valid string.'
    if (shift < 0 || !Number(shift)) return 'Please enter a valid number.'

    return newStr;
};

module.exports = caesarCipher;