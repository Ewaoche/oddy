function isOdd(num) {
    if (typeof num !== 'number') {
        throw new Error('num value should be of a type number')
    }
    return num % 2 !== 0;
}

module.exports = { isOdd }