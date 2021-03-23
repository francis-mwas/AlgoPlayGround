function printNums(num) {
    if (num <= 0) {
        console.log("Finished printing..");
        return;
    }
    console.log("Number is: " + num);
    num--
    printNums(num);
}

console.log(printNums(3));
