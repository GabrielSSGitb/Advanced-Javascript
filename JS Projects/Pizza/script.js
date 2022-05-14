class pizza {
  constructor() {
    this.id= 0;
    this.price = 0;
    this.name= '';
  };
  load() {
    var pizzas = document.querySelectorAll('.pizza-container');
     for(let i = 0; i <= pizzas.length; i++) {
         this.id += 1;
         pizzas[i].classList.remove('pizza-container');
         pizzas[i].classList.add(this.id);
     };
  };
};
var Pizza = new pizza;