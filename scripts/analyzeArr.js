function analyzeArr(arr) {
    if (!Array.isArray(arr)) return 'Please pass in valid array.';

    let length = arr.length;
    let sortArr = arr.sort((a, b) => a - b);

    sortArr.forEach((value, i) => {
        if (!Number(value)) {
            sortArr.splice(i, 1);
        };
        return sortArr
    })

    let result = {
        average: Math.round(sortArr.reduce((sum, num) => sum + num, 0) / arr.length),
        min: sortArr[0],
        max: sortArr[sortArr.length - 1],
        length: length
    };

    return result
};

module.exports = analyzeArr;