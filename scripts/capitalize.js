function capitalize(str) {
    if (typeof(str) !== "string" || str.length === 0) return 'Please enter valid string.';
    return str[0].toUpperCase() + str.substring(1, str.length).toLowerCase();
};

module.exports = capitalize;