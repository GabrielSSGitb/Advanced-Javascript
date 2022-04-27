async function upload() {
  let fileinput = document.querySelector('#files');
  let form = new FormData();
  form.append("tittle", "Uploading file");
  form.append("File", fileinput);
  let reg = await fetch('https://www.brutaldeveloper.com.br', {method: "POST", body: form, headers: {'Content-type': 'multipart/form-data'}});
  console.log(reg);
};