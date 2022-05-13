class pizza {
  constructor() {
    this.id= 0;
    this.price = 0;
    this.name= '';
  };
  load() {
    var pizzas = document.querySelectorAll('.pizza-container');
     for(let i = 1; i <= pizzas.length; i++) {
         this.id += 1;
     };
  };
};
var Pizza = new pizza;