let array = [45, 7, 88, 77, 99, 10];
let array2 = [];
 /*array2 = array.map(function(item) {
     return item * 2;
 });
 o Map faz um mapeamento do array e aplica uma função! "Ele cria um novo array com o novo valor!"
console.log(array2);*/

for(let i in array) {
    array2.push(array[i] * 2)
}
array2 = array.filter(function(item) {
    if(item < 20) {
        return true
    }else {
        return false
    }
});
console.log('Numeros menores de 20:',array2);
array2 = array.filter(function(item) {
    if(item > 20) {
        return true
    }else {
        return false
    }
});
//O filter retorna um novo array usando valor boolean!
console.log('Numeros maiores de 20:',array2);
 array2 = array.every(function(item) {
     if(item >= 40) {
         return true
     }else {
         return false
     }
 });
 console.log('Every function:',array2);
 array2 = array.some(function(item) {
   return (item > 50) ? true : false
 });
 console.log('Some:',array2);