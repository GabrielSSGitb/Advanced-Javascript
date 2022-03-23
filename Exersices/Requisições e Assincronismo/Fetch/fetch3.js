function loadposts() {
    document.querySelector('h1').innerHTML=`Welcome to my page!`;
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then((info) =>  info.json())
   .then((json) => {
       let html = ``;
       for(let i in json) {
          html+= 'Title: '+json[i].title+'</br>';
          html+= 'Post: '+json[i].body+'<hr>';
       }
      document.querySelector('#content').innerHTML= html;
   })
   .catch((error) => console.log('[ERROR]'))
   ;
};
function timer() {
    document.querySelector('h1').innerHTML=`Loading....`;
    setTimeout(loadposts, 2000);
};