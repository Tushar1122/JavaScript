console.log(`<---------------String Reverse--------------->`);
function reverseString(str){
let res = "";
    for(let index = str.length-1;index >= 0; index--){
        let ch = str.charAt(index) ;
        res = res + ch;
    }
    console.log(`string => "${str}" and Reversed string => "${res}"`);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");