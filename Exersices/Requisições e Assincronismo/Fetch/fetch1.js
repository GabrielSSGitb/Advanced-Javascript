function loaposts() {
 document.getElementById('posts').innerHTML="Loading....";
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then((result) => {
    return result.json(); //This is a Promise!!!
  })
  .then((json) => {
    let getemail = Math.floor(Math.random()*500);
    document.getElementById('posts').innerHTML=`${json[getemail].email} and others ${json.length - 1} people, commeted on your website!`;
    console.log(json)
  })
  .catch((error) => console.log('ERROR'))
  ;
};