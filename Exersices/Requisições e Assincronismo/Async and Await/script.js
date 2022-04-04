async function loadreg() {
  let req = await fetch('https://jsonplaceholder.typicode.com/photos');
  let json = await req.json();
  showcontent(json);
};
function getalbums() {
  document.querySelector('h1').innerHTML=`Loading, please wait!`;
  setTimeout(loadreg, 2000);
};
function showcontent(json) {
   let html = '';
   for(let i in json) {
       html+= '<h2>Album '+json[i].id+'<h2/><br>';
       html+= '<p>'+json[i].url+'<p/> <hr>';
   }
   document.querySelector('#photos').innerHTML= html;
};