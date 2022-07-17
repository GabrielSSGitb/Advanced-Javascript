import {pizzaslist} from "./pizzas.js";
class pizza {
   constructor() {
     this.id= 0;
   }
   start() {
    for(let i in pizzaslist) {
      this.id+= 1;
      pizzaslist[i].id= this.id;
    };
    return this.events();
   };
   create() {
    for(let i in pizzaslist) {
      var section = document.querySelector('#content');
      var container = document.createElement('div');
      var img = document.createElement('img');
      var h2 = document.createElement('h2');
      var price = document.createElement('p');
      var text = document.createElement('p');
      var button = document.createElement('button');

      container.classList.add('pizza-container');
      price.classList.add('price');
      text.classList.add('text');
      button.classList.add(pizzaslist[i].id);

      img.src= pizzaslist[i].img;
      h2.textContent= pizzaslist[i].name;
      price.textContent= `R$ ${pizzaslist[i].price}`;
      text.textContent= "This Pizza it´s insane because it´s pretty damm good, incredible, buy it you are not gonna regret it!";
      button.textContent= `Add to menu`;
      container.appendChild(img);
      container.appendChild(h2);
      container.appendChild(price);
      container.appendChild(text);
      container.appendChild(button);
      section.appendChild(container);
      return this.buttonsevent();
    };
   };
   events() {
     document.querySelector('#link').addEventListener('click', () => this.sidebar());
     return this.create();
   };
   sidebar() {
      document.querySelector('aside').style.display='block';
      document.querySelector('section').style.maxWidth='80vw';
   };
   buttonsevent() {
    
   };
};
var Pizza = new pizza;
Pizza.start();