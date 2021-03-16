
// first solution 
function addUpTon(n) { 
    let total = 0;

    for (var i = 1; i <= n; i++) { 
        total += i;
    }
    return total;
}

console.log(addUpTon(100));


// second solution
function addUpTo(n) {
   return total = n * (n + 1) / 2;

}
 
console.log("The total is: " + addUpTo(100));
