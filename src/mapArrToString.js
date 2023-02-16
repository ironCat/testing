const mapArrToString = (arr) => {
    return arr
        .filter(it => Number.isInteger(it))
        .map(it => String(it))
}

module.exports = mapArrToString;