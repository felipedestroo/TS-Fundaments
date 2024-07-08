"use strict";
// 1 - conhecendo o number
const a = 10;
let b = 3.58973;
const c = 23;
function sum(a, c) {
    return a + c;
}
console.log(sum(a, c));
console.log(a);
console.log(typeof (a));
console.log(b.toPrecision(2));
// 2 - conhecendo a string 
const firstName = "Felipe ";
const lastName = "Destro";
const client = "Raimundo";
function nome(firstName, lastName) {
    return firstName + lastName;
}
console.log(`Olá, ${nome(firstName, lastName)}`);
console.log(typeof (firstName));
console.log(lastName.toUpperCase());
console.log(firstName.toLowerCase() + lastName.toUpperCase());
function hi(client) {
    console.log(`Olá, ${client}`);
    console.log(`Meu nome é ${nome(firstName, lastName)}`);
}
console.log(hi(client));
// 3 - Boolean
const t = true;
const f = false;
console.log(t, f);
console.log(typeof t);
console.log(typeof f);
//  4 - Annotation e Inferência
let ann = "Annotation";
let inf = "Inferência";
// inf = 1
console.log("Testando tsc -w");
// Desafio - 2 
let num = 23;
let newString = String(num);
console.log("Meu número é o " + newString);
const newNumber = 26;
const numberToString = newNumber.toString();
const myPrintNumber = `Meu número é o ${numberToString}`;
console.log(myPrintNumber);
