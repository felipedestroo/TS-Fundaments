"use strict";
// 1 - Arrays
// Essa forma é a mais utilizada para criar arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[1]);
let names = ["Felipe", "Destro"];
names.push("Felipe");
console.log(names[1]);
// 2 - Outro Método de Array 
// Em códigos mais antigos é possivel que se encontre esse método
const nums = [10, 20, 30];
nums.push(40);
console.log(nums);
console.log(nums[3]);
const newName = ["Felipe", "Destro"];
newName.push("Silva");
console.log(newName);
console.log(newName[2]);
// 3 - O tipo Any
// Se atentar a NÃO utilizar o Any
const ary1 = [1, "Felipe", [1, 2, 3], { names: "Silva" }];
console.log(ary1);
ary1.push("Felipe");
console.log(ary1);
// 4 - Parametros tipados e retornos de função
function soma(a, b) {
    return a + b;
}
console.log(soma(10, 4));
function conc(c, d) {
    return c + d;
}
console.log(conc("Felipe ", "Destro"));
// 5- funcao anonima
setTimeout(function () {
    const sallary = 227356753.27625;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
