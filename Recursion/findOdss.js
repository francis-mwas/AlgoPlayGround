// find odd numbers recursively with using a helper method
function findOddNumbers(arr) {
    let oddsArr = [];

    function helper(input) {
        if (input.length === 0) return;

        if (input[0]  % 2!== 0) {
            oddsArr.push(input[0]);
        }

        helper(input.slice(1));
    }
    helper(arr)
    return oddsArr;
}

console.log(findOddNumbers([2, 4, 6, 7, 8, 9]));
