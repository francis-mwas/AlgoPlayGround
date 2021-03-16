function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let min = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i != min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([12, 34, 45, 6, 2]));
