function main(afferentValuer) {
    let postalCode = afferentValuer;
    let americanCode = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::']

    if (isPostalCodeAndBarCode(postalCode) === 1)
        return postalCodeToBarCode(postalCode, americanCode);
    else
        return barCodeToPostalCode(postalCode, americanCode);
}

function isPostalCodeAndBarCode(num) {
    if (num.length <= 10)
        return 1;
    else
        return 0;
}

function postalCodeToBarCode(postalCode, americanCode) {
    let postalCodeArray = filterPostalCode(postalCode);
    let array = joinBarCode(postalCodeArray, americanCode);

    return '|\t' + array + '\t|';
}

function filterPostalCode(postalCode) {

    return postalCode.split('').filter(item => item !== '-');
}

function postalCodeSum(postalCodeArray) {

    return postalCodeArray.reduce((a, b) => parseInt(a) + parseInt(b));
}

function joinBarCode(postalCodeArray, americanCode) {
    let resultArray = [];
    let sum = postalCodeSum(postalCodeArray);

    if (isTenMultiple(sum))
        postalCodeArray.push(10 - (sum % 10));
    else
        postalCodeArray.push(0);
    postalCodeArray.forEach(item => {
        resultArray.push(americanCode[parseInt(item)])
    });

    return resultArray.join('\t');
}

function isTenMultiple(sum) {
    return sum % 10 !== 0;
}

function barCodeToPostalCode(postalCode, americanCode) {
    let result = [];
    let postalCodeArray = postalCode.split('	');
    postalCodeArray.filter(item => {
        americanCode.forEach((data, index) => {
            if (data === item)
                result.push(index)
        });
    });
    resultLength(result);
    addMinusSign(result);

    return result.join('');
}

function resultLength(result) {
    if (isNotFiveAndNine(result))
        result.pop();
}

function isNotFiveAndNine(result) {
    return result.length !== 5 || result.length !== 9;
}

function addMinusSign(result) {
    if (result.length === 9)
        result.splice(5, 0, '-');
}

module.exports = main;
