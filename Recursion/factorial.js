// Non-recursive solution 
function fact(num) {

    if (num < 0) return false;
    let product = 1;
    if (num === undefined) return false;
    for (let i = num; i > 0; i--) {
        product *= i;
    }
    return product;
}

// recursive solution 
// factorial(4) returns 4 * factorial(3)
// factorial(3) returns 4 * 3 * factorial(2)
// factorial(2) returns 4 * 3 * 2 * factorial(1)
// factorial(1) returns 4 * 3 * 2 * 1 * factorial(0)
// factorial(0) returns 4 * 3 * 2 * 1 * 1
function factorial(num) {
    if (num < 0) return false;
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(4));
