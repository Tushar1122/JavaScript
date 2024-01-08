const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`<======First Element & Last Element========>`);
console.log(fruits_seasonal[0]);
console.log(fruits_seasonal[fruits_seasonal.length-1]);

console.log(`<======add element at first position=======>`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`<======remove element=======>`);
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);

console.log(`<======add element at last position=======>`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`<======add element at random position=======>`);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruits_seasonal);

console.log(`<======replace an element=======>`);
fruits_seasonal.splice(2,1,"kiwi");
console.log(fruits_seasonal);

console.log(`<======indexing element=======>`);
console.log(fruits_seasonal.slice(0,4));

console.log(`<======Last elements=======>`);
console.log(fruits_seasonal.slice(fruits_seasonal.length-3,fruits_seasonal.length));

