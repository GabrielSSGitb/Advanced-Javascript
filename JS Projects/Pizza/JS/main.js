import {pizzaslist} from "./pizzas.js";
class pizza {
   constructor() {
     this.id= 0;
   }
   create() {
     pizzaslist.map((item, index) => {
      let section = document.querySelector('#content');
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

      container.appendChild(img);
      container.appendChild(h2);
      container.appendChild(text);
      container.appendChild(btn);
      section.appendChild(container);
     });  
   };
};
var Pizza = new pizza;
Pizza.create();