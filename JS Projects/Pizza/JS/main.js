import {pizzaslist} from "./pizzas.js";
class pizza {
   constructor() {
     this.id= 0;
     this.buttonid = 0;
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
      this.buttonid+= 1;

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
      button.classList.add(this.buttonid);
      this.list(button);

      button.textContent= 'Add in the List';
      img.src= pizzaslist[i].img;
      h2.textContent= pizzaslist[i].name;
      price.textContent= `R$ ${pizzaslist[i].price}`;
      text.textContent= "This Pizza it´s insane because it´s pretty damm good, incredible, buy it you are not gonna regret it!";
      container.appendChild(img);
      container.appendChild(h2);
      container.appendChild(price);
      container.appendChild(text);
      container.appendChild(button);
      section.appendChild(container);
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
   list(button) {
    
   };
};
var Pizza = new pizza;
Pizza.start();