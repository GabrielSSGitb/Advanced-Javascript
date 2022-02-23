let array = [];
for(let i = 0; i < 5; i++) {
    array[i] = Math.random()
}
console.log(array);

let array2 = [];
array2 = array.map(function(item) {
    return item - 2
});
console.log(array2);
array2 = array.every((item) => {
  return (item < 20) ? true : false
});
console.log(array2);
array2 = array.some((item) => {
   return (item > 200) ? true : false
});
console.log('Item menor que 200:',array2);
array2 = array.filter((item) => {
    return (item > -1.1581488296421574) ? true : false
});
console.log('Items maiores que -1.1581488296421574:',array2);

