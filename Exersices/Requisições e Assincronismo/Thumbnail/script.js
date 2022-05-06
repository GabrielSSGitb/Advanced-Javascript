class upthumbnail {
   load() {
      document.querySelector('#upload').addEventListener('click', this.show);
      document.querySelector('#remove').addEventListener('click', this.remove);
      document.querySelector('#send').addEventListener('click', this.send);
   };
   show() {
    var inputimg = document.querySelector('#image').files[0];
    var img = document.createElement('img');
    img.src= URL.createObjectURL(inputimg);
    document.querySelector('#thumb').appendChild(img);
    document.querySelector('#content').style.display='none';
    document.querySelector('#send').style.display='block';
    document.querySelector('#remove').style.display='block';
   };
   send() {
    document.querySelector('.msg').style.display='block';
    document.querySelector('.msg').innerHTML= 'Sending it to the Cloud...';

    setTimeout(async () => {
    let img = document.querySelector('#thumb img');
    let body = new FormData;
    body.append('title', 'thumbnail');
    body.append('thumbnail', img)
    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {method: "POST", body: body, headers: {'Content-type': 'multipart/form-data'}});
    document.querySelector('.msg').innerHTML= 'Thumbnail uploaded!!!';
    }, 3000);
    
   };
   remove() {
     document.querySelector('#thumb').innerHTML= '';
     document.querySelector('#content').style.display='block';
     document.querySelector('#send').style.display='none';
     document.querySelector('#remove').style.display='none';
     document.querySelector('.msg').style.display='none';
   };
};
var Upthumbnail = new upthumbnail;