// function naiveSearch(longStr, shortStr) {
//   let count = 0;
//   for (var i = 0; i < longStr.length; i++) {
//     for (var j = 0; j < shortStr.length; j++) {
//       console.log(shortStr[j], longStr[i + j]);
//       if (longStr[i + j] != shortStr[j]) {
//         console.log("BREAK!");
//         break;
//       }

//       if (j == shortStr.length - 1) {
//         count++;
//         console.log("FOUND ONE");
//       }
//     }
//   }
//   return count;
// }

function naiveSearch(long, short) {
  let count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log(long[i + j]);
    }
  }
}

console.log(naiveSearch("Hello world", "llo"));
