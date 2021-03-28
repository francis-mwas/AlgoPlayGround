function binarySearch(arr, element) {
  // define start and end index 
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    // keep on updating the middleIndex, every time startIndex and endIndex changes
    let middleIndex = Math.floor(startIndex + endIndex / 2);

    if (arr[middleIndex] === element) {
      return console.log("The element was found in", middleIndex);
    }
    // search on the right side of the array
    if (element > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    }
    // search on the left side of the array
    if (element < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    } else {
      console.log("Element was not found in this iteration, looping again");
    }
  }
  console.log("The element was not found in this array");
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 6);//2
