function dosomething(e) {
     if(e.keyCode == 13 && e.ctrlKey == true) {
         let texto = document.getElementById('text').value;
         console.log(texto);
     }
};