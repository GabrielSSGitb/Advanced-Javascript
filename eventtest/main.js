var boxes = document.getElementsByClassName('boxes');
var button = document.querySelector('#addmoreboxes');
function addboxes() {
   let number = 24;
   for(let i = 0; i < number;i++) {
      let div = document.createElement('div');
      let br = document.createElement('br');
      div.classList.add('boxes');
      document.body.appendChild(div, br);
      boxes[i].addEventListener('mouseover', applystyle);
      boxes[i].addEventListener('click', applystyle)
      boxes[i].addEventListener('mouseout',removestyle);
   }
   button.style.display= 'none';
};
function applystyle(obj) {
   var r = Math.floor(Math.random()*255);
   var g = Math.floor(Math.random()*255);
   var b = Math.floor(Math.random()*255);

  obj.target.style.border='1px solid black';
  obj.target.style.background= 'rgb('+r+', '+g+', '+b+')';
};
function removestyle(obj) {
  obj.target.style.border='none';
};
button.addEventListener('click', addboxes);