function checkEvenOdd(number) {

    if((number % 2) == 0){
        return "Even Number.";
    }
    else return "Odd Number.";
}
console.log(`Number 45 is ${checkEvenOdd(45)}`);
console.log(`Number 70 is ${checkEvenOdd(70)}`);
console.log(`Number 67 is ${checkEvenOdd(67)}`);
console.log(`Number 98 is ${checkEvenOdd(98)}`);

console.log("<------------------------------------------------>");

function checkEligibleForVoting(age) {
    if(age >= 18){
        return "Eligible For Vote.";
    }
    else return "Not Eligible For Vote.";
}
console.log(`Age 18 is ${checkEligibleForVoting(18)}`);
console.log(`Age 20 is ${checkEligibleForVoting(20)}`);
console.log(`Age 17 is ${checkEligibleForVoting(17)}`);
console.log(`Age 40 is ${checkEligibleForVoting(40)}`);

console.log("<--------------------------------------------------->");

function checkStringLength(value) {
    if(value.length >= 10){
        return `"${value}" contains more than 10 characters.`;
    }
    else{
        return `"${value}" does not contains 10 characters."`
    }
}
console.log(checkStringLength("JavaScript - ES6"));
console.log(checkStringLength("Java"));

console.log("<----------------------------------------->");
function checkNameStart(value) {
    if(value.startsWith("Java")){
        console.log(`"${value}" starts with "Java"`);
    }
    else{
        console.log(`"${value}" not starts with "Java"`);
    }
}
checkNameStart("JavaScript Language");
checkNameStart("Python Language");