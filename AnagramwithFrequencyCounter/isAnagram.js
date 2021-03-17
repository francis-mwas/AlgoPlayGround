function isAnagram(str1, str2) {
    // take care of edge cases 
    if (!str1 || !str2) return false;
    if (str1.length != str2.length) false;

    // create an object to track values in first string 
    const obj = {};

    for (let str of str1) {
        if (obj[str] > 0) {
            obj[str] ++
        }
        obj[str] = 1;
    }

    for (let s2 of str2) {
        // check to see if the values in str2 are present in str1 values 
        // if they are not present return false
        if (!obj[s2]) {
            return false;
        }
        obj[s2]--;
    }
    // if you found a match return true
    return true;
}
console.log(isAnagram("silent", "listens"));
