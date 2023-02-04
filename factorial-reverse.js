function getFactorial(number) {
    let factorial = 1;
    for (var i = number; i > 0; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
const result = getFactorial(7);
console.log(result);