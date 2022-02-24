// number to string:
let num = 500;
let res = num.toString();
console.log(res);
// toFixed:
let n1 = 500.849583835;
let s = n1.toFixed(2);
console.log(s);
// tolocalestring and replace:
let num1 = 500.55;
let num2 = 955.55;
let s2 = num1 * num2;
s2.toLocaleString().replace(",", ".");
console.log(s2);
