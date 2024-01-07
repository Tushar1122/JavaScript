
console.log(`<--------------Count the vovels------------->`);
function countVovels(){
    let str = "I am very good IT Developer";
    let count = 0;
    for(let index = 0; index <= str.length-1;index++){
        let ch = str.charAt(index);
        if(ch == 'a' || ch =='e' || ch =='i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I'|| ch == 'O'|| ch == 'U'){
            count++;
        }
    }
    console.log(`"${str}" contains total "${count}" vovel characters`);
}
countVovels();

console.log(`<----------------sum of cubes---------------->`);
function sumOfCubes(){
    let sum = 0;
    for(let i = 1; i <= 5; i++){
        sum = sum + (i*i*i);
    }
    console.log(`Sum of cubes is "${sum}"`);
}
sumOfCubes();

console.log(`<----------------odd positioned chars--------->`);
function oddPositionedChars(str){
    let strTrim = str.split(" ").join("");
    let res = "";
    for(let i = 0; i <= strTrim.length - 1; i++){
      //  console.log(strTrim);
        let ch = strTrim.charAt(i);
        if((i % 2) == 0){
            console.log("");
        }
        else{
            res = res + ch + " ";
            //console.log(`${str.charAt(i)}`);
        }
    }
    console.log(`"${str}" having odd positioned chars are "${res}"`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT Champ");