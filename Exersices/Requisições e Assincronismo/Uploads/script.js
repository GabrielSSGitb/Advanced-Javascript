async function upload() {
  var file = document.querySelector("#files").files[0];
  let body = new FormData();
  body.append("title", "Uploading file");
  body.append("file", file);
  let req = await fetch('https://brutaldeveloper.mysite.com/posts', {method: "POST", body: body, headers: {'Content-Type': 'multipart/form-data'}});
 console.log(req)
};