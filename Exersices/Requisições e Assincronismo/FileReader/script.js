function read() {
  var reader = new FileReader;
  var file = document.querySelector('#image').files[0];
  
  reader.onloadend= function() {
   var img = document.createElement('img');
   img.src= reader.result;
   img.width= 300;
   document.querySelector('#area').appendChild(img);
  };
  reader.readAsDataURL(file);
};