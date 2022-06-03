function caesarCipher(str, shift) {
    const alphaLow = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let result = '';

    if (typeof(str) !== 'string') return 'Please enter a valid string.'
    if (!Number(shift)) return 'Please enter a valid number.'



    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === str[i]) {
            let index = alphaUpper.indexOf(str[i]);
            if (index === -1) {
                result += str[i]
            } else if (index + shift < 0) {
                result += alphaUpper[(index + shift) + 26];
            } else {
                result += alphaUpper[(index + shift) % 26];
            }
        } else if (str[i].toLowerCase() === str[i]) {
            let index = alphaLow.indexOf(str[i]);
            if (index + shift < 0) {
                result += alphaLow[(index + shift) + 26];
            } else {
                result += alphaLow[(index + shift) % 26];
            }
        }
    }

    return result;
};

module.exports = caesarCipher;