function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial *= i;
        i++;
    }
    return factorial;
}
const result = getFactorial(8);
console.log(result);