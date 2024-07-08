// 1 - conhecendo o number
var a = 10;
var b = 3.58973;
var c = 23;
function sum(a, c) {
    return a + c;
}
console.log(sum(a, c));
console.log(a);
console.log(typeof (a));
console.log(b.toPrecision(2));
// 2 - conhecendo a string 
var firstName = "Felipe ";
var lastName = "Destro";
var client = "Raimundo";
function nome(firstName, lastName) {
    return firstName + lastName;
}
console.log("Ol\u00E1, ".concat(nome(firstName, lastName)));
console.log(typeof (firstName));
console.log(lastName.toUpperCase());
console.log(firstName.toLowerCase() + lastName.toUpperCase());
function hi(client) {
    console.log("Ol\u00E1, ".concat(client));
    console.log("Meu nome \u00E9 ".concat(nome(firstName, lastName)));
}
console.log(hi(client));
// 3 - Boolean
var t = true;
var f = false;
console.log(t, f);
console.log(typeof t);
console.log(typeof f);
