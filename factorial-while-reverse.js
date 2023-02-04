function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i > 0) {
        factorial *= i;
        i--;
    }
    return factorial;
}
const result = getFactorial(7);
console.log(result);