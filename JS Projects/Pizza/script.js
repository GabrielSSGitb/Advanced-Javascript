class pizza {
  constructor() {
    this.id= 0;
  this.pizzaslist = [
    {id: 0, name: "Mussarela", price: 0}, {id: 0, name: "Calabreza", price: 0},
    {id: 0, name: "Champignon", price: 0}, {id: 0, name: "Cinco Queijos"},
    {id: 0, name: "Frango", price: 0}, {id: 0, name: "Bolonhesa", price: 0}
  ];
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