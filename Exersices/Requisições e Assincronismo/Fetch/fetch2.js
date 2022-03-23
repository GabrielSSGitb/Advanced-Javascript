function getinfo() {
   document.querySelector('h1').innerHtml=`Loading....`;
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(function(result) {
      return result.json();
   })
   .then(function(json) {
      return showresult(json);
   })
   .catch((error) => {
      console.log("[ERROR]")
   });
};
function showresult(json) {
   document.querySelector('h1').innerHTML=`The Winner is:`;
   let raffle = Math.floor(Math.random()*10)
   let table = document.querySelector('table#raffleresult');
   let tr = table.insertRow();
   let namecamp = tr.insertCell();
   let usercamp = tr.insertCell();
   let emailcamp = tr.insertCell();
   let city = tr.insertCell();
   let street = tr.insertCell();
   namecamp.textContent= json[raffle].name;
   usercamp.textContent= json[raffle].username;
   emailcamp.textContent= json[raffle].email;
   city.textContent= json[raffle].address.city;
   street.textContent= json[raffle].address.street;
   table.style.display='block';
   table.appendChild(tr);
};