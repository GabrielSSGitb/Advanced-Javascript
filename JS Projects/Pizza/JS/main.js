import {pizzaslist} from "./pizzas.js";
class pizza {
   constructor() {
     this.id= 0;
   };
   start() {
    for(let i in pizzaslist) {
      this.id+= 1;
      pizzaslist[i].id= this.id;
    };
    return this.create();
   };
   create() {
    for(let i in pizzaslist) {
      let section = document.querySelector('#content');
      let container = document.createElement('div');
      let h2 = document.createElement('h2');
      let price = document.createElement('p');
      let text = document.createElement('p');
      let button = document.createElement('button');
      container.classList.add('pizza-container');
      price.classList.add('price');
      text.classList.add('text');
      section.appendChild(container);
    };
   };
};
var Pizza = new pizza;
Pizza.start();