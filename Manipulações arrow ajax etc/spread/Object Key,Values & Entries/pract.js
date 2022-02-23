function register() {
   let car = document.querySelector('#car').value;
   let mark = document.querySelector('#mark').value;
   let color = document.querySelector('#color').value;
   let year = document.querySelector('#year').value;
   let price = document.querySelector('#price').value;
   
   let carinfo = {
      name: car,
      color: color,
      mark: mark,
      year: year,
      price: price
   };
   console.log(`Car registered with success:`,Object.entries(carinfo));
};