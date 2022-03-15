function loaposts() {
  fetch('https://jsonplaceholder.typicode.com/posts'). 
   then((result) => {
       console.log(result);
   }).catch((erro) => {
        console.log("ERROR");
    })
  ;
};