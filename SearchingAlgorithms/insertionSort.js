// function insertionSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     let start = arr[1];
//     for (var j = 0; j < arr.length; j++) {
//       if (start < arr[j - 1]) {
//         start = arr[j + 1];
//         console.log(arr);
//       }
//     }
//   }
//   return arr;
// }
const insertionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
};

console.log(insertionSort([15, 4, 10, 2, 30, 25]));
