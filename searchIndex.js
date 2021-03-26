// Find if there is a value in an array that matches the target 
// 1.  Linear search solution
function searchIndex(arr, target) {
    // edge cases mitigation 
    if (arr.length === 0) return false;
    if (target === undefined) return false;

    // check every number if is equal to the target 
    for (let i = 0; i < arr.length; i++) {
        // if there is a match return index of the value that matches the target 
        if (arr[i] === target) {
            return i;
        }
    }
// else return -1 
    return -1;

}
console.log(searchIndex([1, 2, 3, 4], 3));
