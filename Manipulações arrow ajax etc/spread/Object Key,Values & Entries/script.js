//An array is also an object!
let list = ['Bread', 'Egg', 'Sausage', 'Pumpkin', 'Potato', 'Avocato'];
console.log(Object.keys(list));
console.log(Object.values(list));
//Using Entries:
console.log(`Shopping List:`,Object.entries(list));

//The Object.keys in an object shows the attribute:
let car = {
    Name: "Spyder",
    Mark: "Ferrari",
    year: 2020,
    price: 7000000
};
console.log(`Keys:`,Object.keys(car));
console.log(`Values:`,Object.values(car));
console.log(`Car Information:`,Object.entries(car));