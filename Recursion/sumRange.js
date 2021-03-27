// This function receives a number and add the range

function sumRange(num) {
    // base case: if num is equal to 1 return 1 
    if (num === 1) return 1;
    // else add num with the results of calling sumRange functions.
    return num + sumRange(num - 1);
}

console.log(sumRange(20));//10.
