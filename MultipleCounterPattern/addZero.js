// An optimized solution using the multiple counter problem solving pattern 
function addZero(arr) {

    // create left and right counter 
    let left = 0;
    let right = arr.length - 1;
 /**
         * if sum is zero return the pair
         * if sum is greater than zero move the right pointer one step behind
         * else if sum is less than zero increment left counter by 1
         */
    while (left < right) {
        let sum = arr[left] + arr[right];
       
        if (sum === 0) {
            return [arr[left], arr[right]];

        // if sum > 0  move right pointer one step behind
        } else if (sum > 0) {
            right--;
        } else {
            //move left pointer one step ahead 
            left++; 
        }
    }
}

console.log(addZero([-5,-4,-3, -2, -1, 0, 1, 2, 6])); //[-2, 2]
