
function getOddSum(numArr) {
    let sum = 0;

    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 != 0) {
            sum += numArr[i];
        }
    }
    return sum;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const result = getOddSum(myNumbers);
console.log(result);
