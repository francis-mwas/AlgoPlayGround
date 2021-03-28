// simple linear search implementation
function linearSearch(arr, val) {
    if (arr.length === 0) return false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val) return i;
    }
    return -1
}


console.log(binarySearch([1,2,3,4,5,8,10,17,60], 4));
