function naiveSearch(longStr, shortStr) {
  let count = 0;
  for (var i = 0; i < longStr.length; i++) {
    for (var j = 0; j < shortStr.length; j++) {
      console.log(shortStr[j], longStr[i + j]);
      if (longStr[i + j] != shortStr[j]) {
        // Break out of inner loop if there is no match found
        console.log("Break out of inner loop!");
        break;
      }

      if (j == shortStr.length - 1) {
        count++;
        console.log("Found a match");
      }
    }
  }
  return count;
}

console.log(naiveSearch("Hello world", "llo"));
