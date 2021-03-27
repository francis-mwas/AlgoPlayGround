// Non-recursive solution 
function fact(num) {
    let total = 1;
    if (num === undefined) return false;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}

// recursive solution 

console.log(fact(4));
