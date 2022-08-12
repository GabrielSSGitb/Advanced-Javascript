import {pizzaslist} from "./pizzas.js";
const get = (el) => document.querySelector(el);
const getall = (els) => document.querySelectorAll(els);
class pizza {
   constructor() {
    this.id = 0;
    for(let i in pizzaslist) {
     this.id++;
     pizzaslist[i].id = this.id;
    };
   };
   create() {
     pizzaslist.map((item) => {
      let section = get('#content');
      let container = document.createElement('div');
      let img = document.createElement('img');
      let price = document.createElement('p');
      let h2 = document.createElement('h2');
      let text = document.createElement('p');
      let btn = document.createElement('button');

      img.src= item.img;
      h2.textContent= item.name;
      price.textContent= `R$ ${item.price.toFixed(2)}`;
      text.textContent= "This Pizza it´s insane because it´s pretty damm good, incredible, buy it you are not gonna regret it!";
      btn.textContent= "Add to menu";

      container.classList.add('pizza-container');
      price.classList.add('price');
      text.classList.add('text');
      btn.classList.add(item.id);
      btn.addEventListener('click', () => {
          this.menulist= [item.name, item.img];
          return this.opennav();
      });

      container.appendChild(img);
      container.appendChild(price);
      container.appendChild(h2);
      container.appendChild(text);
      container.appendChild(btn);
      section.appendChild(container);
     });
   };
};
var Pizza = new pizza;
Pizza.create();