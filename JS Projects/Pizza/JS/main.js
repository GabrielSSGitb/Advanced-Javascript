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
      let h2 = document.createElement('h2');
      let text = document.createElement('p');
      let btn = document.createElement('button');

      img.src= item.img;
      h2.textContent= item.name;
      text.textContent= "This Pizza it´s insane because it´s pretty damm good, incredible, buy it you are not gonna regret it!";
      btn.textContent= "Add to menu";

      container.classList.add('pizza-container');
      text.classList.add('text');
      btn.classList.add(item.id);
      btn.addEventListener('click', () => {
        const pname = item.name;
        const pprice = item.price
        return this.opennav(pname, pprice);
      });

      container.appendChild(img);
      container.appendChild(h2);
      container.appendChild(text);
      container.appendChild(btn);
      section.appendChild(container);
     });  
   };
   opennav(pname, pprice) {

  };
};
var Pizza = new pizza;
Pizza.create();