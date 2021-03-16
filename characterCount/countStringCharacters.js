// function countStrCharacters(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase().trim();
//         if (obj[char] > 0) {
//             obj[char]++;
//         } else {
//             obj[char]= 1;
//         }
//     }
    
    
//     return obj;
// }


// es6
const countStrCharacters = (str) => {
    const obj = {};
    for (let char of str) {
        char = char.toLowerCase().trim();
        if (checkAlphanumeric(char)) {
               if (obj[char] > 0) {
            obj[char]++;

        } else {
            obj[char] = 1;
        }
        }
     
    }

    return obj;
}

// check if the string passed is alphanumeric 
function checkAlphanumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric 0-9
        !(code > 64 && code < 94) && // uppercase alpha A-Z
        !(code > 96 && code < 123)) { // lowercase alpha a-z
        return false
    } 
    return true;
 }

console.log(countStrCharacters("HELLO WORLD!!!!!&&&"));
// output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

