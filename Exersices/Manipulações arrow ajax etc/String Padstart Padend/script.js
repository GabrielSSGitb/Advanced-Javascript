let phone = '9888';
let phone2 = '3122';
console.log(phone.padEnd(9, '*'));
console.log(phone2.padStart(9, '-'))

let card = '22342234223422348765';
let lastdigits = card.slice(-4);
console.log('Is this your card?',lastdigits.padStart(16, '*'));