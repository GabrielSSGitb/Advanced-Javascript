function show() {
  var inputimg = document.querySelector('#image').files[0];
  var img = document.createElement('img');
  img.src= URL.createObjectURL(inputimg);
  img.width= 200;
  document.querySelector('#thumbnail').appendChild(img);

  setTimeout(async function()  {
  var formdata = new FormData();
    formdata.append('title', 'thumbnail');
    formdata.append('Image', inputimg);
    var req = await fetch('https://jsonplaceholder.typicode.com/posts', {method: "POST", body: formdata, headers: {'Content-type': 'multpart/form-data'}});
    console.log(req)
  }, 3000)
};