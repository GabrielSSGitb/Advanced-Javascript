async function senddata() {
  document.querySelector('#message').innerHTML='Loadding.....';
  let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
     method: "POST",
     body: JSON.stringify({
        title: "Tittle teste",
        body: "Babe babe do biru laibe laibe",
        userId: 8
     })
  });
  let json = await req.json();
  console.log(json)
  document.querySelector('#message').innerHTML='Loaded!!!';
};
