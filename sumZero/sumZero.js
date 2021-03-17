
// 1. First solution 
// This function receives a sorted Array
// function addZero(arr) {
//     // loop through the array for the first time starting from zero index 
//     for (var i = 0; i < arr.length; i++) {
//           // loop through the array for the second time starting from index one
//         for (var j = i + 1; j < arr.length; j++) {
//             // check if there is a pair that when you sum it will result to zero 
//             if (arr[i] + arr[j] === 0) {
//                 // return an array with the pair 
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }
// 2. Second solution. 
// An optimized solution using the multiple counter problem solving pattern 
function addZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(addZero([-5,-4,-3, -2, -1, 0, 1, 2, 6])); //[-3, 3]
