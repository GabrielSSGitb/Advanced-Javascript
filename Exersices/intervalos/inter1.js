var inter;
var timeout;
function comercar() {
     inter = setInterval(timer, 1000);
   timeout =  setTimeout(() => {
          document.querySelector('#video').style.display= 'block';
     }, 3000)
};
function timer() {
   let d = new Date();
   let h = d.getHours();
   let m = d.getMinutes();
   let s = d.getSeconds();
   let txt = h+':'+m+':'+s;

   document.querySelector('#demo').innerHTML= txt;
   document.querySelector('#demo').style.display= 'block';
};
function parar() {
     clearInterval(inter);
     clearTimeout(timeout);
};

/*
 O setinterval(), executa uma função de tempos em tempos.
 O setTimeout(), executa somente uma vez.
 E o clearInterval() e clearTimeout() cancelam a execução.
*/