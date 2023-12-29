

function stringsHandsOn() {
    var text = "   Hey you are doing good, keep it up   ";
    console.log(`Given String is ${text}`);
    console.log(`Length of string is ${text.length}`); 
    var textTrim = text.trim()
    console.log(`After trimming the given text:-> ${textTrim}`);
    console.log(`and now length is ${textTrim.length}`);
    console.log(`Extra spaces count that is removed is ${text.length - textTrim.length}`);
    console.log(`First character after trim is ${textTrim[0]} and Last character is ${textTrim[textTrim.length - 1]}`);
    console.log(`Words after split are ${textTrim.split(" ")}`);
    console.log(`Index of word Good is ${textTrim.indexOf("good")}`);
    console.log(`String starting from index 22 is ${textTrim.substring(22,textTrim.length-1)}`);
    console.log(`Is string ends with up: ${textTrim.endsWith("up")}`);
    console.log(`Is string starts with Hey: ${textTrim.startsWith("Hey")}`);
}
stringsHandsOn();