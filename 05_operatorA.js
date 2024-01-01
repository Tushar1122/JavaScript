function squareOfWordsLength(arg) {
    var length = arg.length;
    return length;
}
var value1 = "JavaScript"; 
var value2 = "Google Chrome";
var value3 = "Developer Smart"; 
var result1 = squareOfWordsLength(value1);
var result2 = squareOfWordsLength(value2);
var result3 = squareOfWordsLength(value3);
console.log(`Length of word "${value1}" is ${result1} and square is ${result1**2}`);
console.log(`Length of word "${value2}" is ${result2} and square is ${result2**2}`);
console.log(`Length of word "${value3}" is ${result3} and square is ${result3**2}`);

console.log("------------------------------------------------------------------------");

function stringOpration() {
    var value = "I am Angular Developer";
    var length = value.length;
    var result = value.split(" ").length;
    var division = length / result;
    var multiplication = length * result;
    console.log(`Length of string "${value}" is ${length} and total no of words are ${result}"`);
    console.log(`division by total number of words  ${division} `);
    console.log(`multiplication by total number of words ${multiplication}`);
}
stringOpration();