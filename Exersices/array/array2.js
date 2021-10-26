let array = ['Ovos', 'Batata', 'Majericão', 'Leite com abobra', 'farinha'];
let array2 = ['Refri', 'soda', 'suco', 'todin'];
array.splice(0, 2)
//Remove tudo: array.splice(1)
 let res = array.concat(array2);
console.log(res);

let wallet = 222.8;
let cal = wallet / 5.47;
let money = cal.toFixed(2);
console.log(`Voçê pode comprar $usd${money}`);