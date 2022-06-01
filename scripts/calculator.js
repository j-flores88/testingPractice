function add(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Please enter valid arguments.';
    if (typeof(a) === "string" || typeof(b) === "string") return Number(a) + Number(b);
    return a + b;
};

function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Please enter valid arguments.';
    if (typeof(a) === "string" || typeof(b) === "string") return Number(a) - Number(b);
    return a - b;
};

function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Please enter valid arguments.';
    if (typeof(a) === "string" || typeof(b) === "string") return Number(a) * Number(b);
    return a * b;
};

function divide(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Please enter valid arguments.';
    if (typeof(a) === "string" || typeof(b) === "string") return Number(a) / Number(b);
    return (b === 0) ? NaN : a / b;
};

export { add, subtract, multiply, divide }