// find odd numbers in an array using pure recursive function.
function findOddValues(arr) {
    // create a new empty array to store odd numbers 
    let oddsArr = [];
    
    // check if array is empty, if empty return oddsArr
    if(arr.length === 0) {
        return oddsArr;
    }
    // check if the current number is even, if not add it to an array.
    if (arr[0] % 2 !== 0) {
        oddsArr.push(arr[0]);
    }
    oddsArr= oddsArr.concat(findOddValues(arr.slice(1)));
    return oddsArr;
}

console.log(findOddValues([11,12,6,3,4,5])); //[11, 3, 5]
                                        
                                                                
                                                                             
                            
            