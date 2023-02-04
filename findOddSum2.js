function sumOfArray(array) {
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        let element = array[i];
        sum += element;
    }
    return sum;
}
function getOddArray(array) {
    let oddArray = [];
    for (var i = 0; i < array.length; i++) {
        const element = array[i];
        // console.log(typeof element);
        if (0 !== element % 2) {
            oddArray.push(element);
        }
    }
    return oddArray;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumberArray = getOddArray(myNumbers);
// console.log(oddNumberArray);
const result = sumOfArray(oddNumberArray);
console.log(result);