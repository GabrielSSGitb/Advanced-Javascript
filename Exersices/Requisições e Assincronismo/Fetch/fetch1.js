function loaposts() {
 document.getElementById('posts').innerHTML="Loading....";
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then((result) => {
    return result.json(); //This is a Promise!!!
  })
  .then((json) => {
    document.getElementById('posts').innerHTML=`${json[0].email} e outras ${json.length - 1} pessoas, comentarão no seu site!`;
    console.log(json)
  })
  .catch((error) => console.log('ERROR'))
  ;
};