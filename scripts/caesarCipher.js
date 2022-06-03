function caesarCipher(str, shift) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = '';

    if (typeof(str) !== 'string') return 'Please enter a valid string.'
    if (!Number(shift)) return 'Please enter a valid number.'

    let newStr = str.toLowerCase();

    for (let i = 0; i < newStr.length; i++) {
        let index = alpha.indexOf(newStr[i]);
        if (index + shift < 0) {
            result += alpha[(index + shift) + 26];
        } else {
            result += alpha[(index + shift) % 26];
        }
    }
    return result;
};

module.exports = caesarCipher;