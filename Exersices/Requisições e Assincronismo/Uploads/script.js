async function upload() {
    let inputf = document.querySelector('#files').files;
    var body = new FormData;
    body.append("Title", "File Uploader");
    body.append("File", inputf);
    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{method: "POST"});
    console.log(inputf);
};