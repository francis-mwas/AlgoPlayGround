// buble sort first solution
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      // console.log("The steps:", arr);
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// optimized solution for bubblesort
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 1; j < i - 1; j++) {
      console.log("The steps:", arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 10, 3, 6, 2, 8, 4]));
