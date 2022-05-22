import {pizzas} from "./pizzas.js";
class pizza {
   constructor() {
     this.id= 0;
   };
   create() {
     for(let i in pizzas) {
        this.id+= 1;
     }
   };
};
var Pizza = new pizza;
Pizza.create();