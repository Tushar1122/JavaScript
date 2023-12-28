console.log("<--------First step--------->");
function greeting() {
    console.log("Greeting -> Hello, I am Tushar Imade");
}
greeting();

console.log("                    ");
console.log("<--------Second step--------->");
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log('Random Number: ${randomNumber}->',randomNumber);
}
generateRandomNumber();

function personalDetails(firstName,lastName,collegeName) {
    console.log("Personal Details->",firstName,lastName,collegeName);
}
personalDetails("Tushar","Imade,","SCOE,Pune");

console.log("                    ");
console.log("<--------Third step--------->");
function swapValues(var1,var2) {
    console.log("Before swapping: ","name1->",var1,"name2->",var2);
    var temp = var1;
    var1 = var2;
    var2 = temp;
    console.log("After swapping: ","name1->",var1,"name2->",var2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("                    ");
console.log("<--------Fourth step--------->");
function addThreeValues(var1,var2,var3) {
    var result = var1 + var2 + var3;
    console.log("Values are ",var1,var2,var3);
    console.log("Result is:->",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
