// Make an exercise that has an input to create an array, and use every on it!
function map() {
    // apply a function to every item in the array:
  let mult = [80,67,98,30,50,90];
  let newmult = [];
  newmult = mult.map((item) => item * 2);
  console.log(mult);
  console.log(`Multiplying every number in the array with Map: ${newmult}`);
};
function filter() {
    // returns a new array if it´s true:
  let array = [80,67,98,30,50,90];
  let array2 = [];
  console.log(array);
  array2 = array.filter((item) => {
     if(item < 80) {
         return true
     }else {
         return false
     }
  })
  console.log(`numbers < 80: ${array2}`);
};
function every() {
    //returns a boolean if every array corresponds to the condition:
    let array = [80,67,98,30,50,90];
    let array2 = [];
    array2 = array.every((item) => item > 40 ? true : false);
    console.log(`Are all the numbers bigger than 40?`);
    console.log(array2);
};
function some() {
    // If some value is in the array it will return true else false:
    let people = ["Marcao", "Gabriel", "Gabriel", "Antonio", "Gabriel"];
    let people2 = [];
    people2 = people.some((item) => item == "Marcao" ? true : false);
    console.log(`Is there "Marcao" in the array?`);
    console.log(people2);
};