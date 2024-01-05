console.log("<=====Print Numbers from 5 to 15 ======>");
for(var index = 5; index <= 15; index++){
    console.log(index);
}

console.log("<=====Print Numbers from 50 to 40 ======>");
for(var index = 50; index >= 40; index--){
    console.log(index);
}

console.log("<=====Print first 15 odd numbers ======>");
var count = 15;
for(var index = 1;  count > 0; index = index + 2){
    console.log(index);
    count--;
}

console.log("<=====Print first 10 even numbers ======>");
var count = 10;
for(var index = 0; count > 0; index = index + 2){
    console.log(index);
    count--;
}

console.log("<=====Print table of 5 ======>");
var count = 10;
for(var index = 5; count > 0; index = index + 5){
    console.log(index);
    count--;
}

console.log("<=====Print table of 10 ======>");
var count = 10;
for(var index = 10; count > 0; index = index + 10){
    console.log(index);
    count--;
}

console.log("<=====Print table of 10 in reverse order ======>");
var count = 10;
for(var index = 100; count > 0; index = index - 10){
    console.log(index);
    count--;
}