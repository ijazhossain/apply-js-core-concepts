function getFactorial(number) {
    let factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
const result = getFactorial(6
);
console.log(result);