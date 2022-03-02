class processdata {
    data() {
     var name = document.querySelector('#name').value;
     var lastname = document.querySelector('#lastname').value;
     var birth = document.querySelector('#birthday').value;
     var cpf = document.querySelector('#cpf').value;
     var rg = document.querySelector('#rg').value;
     var credit = document.querySelector('#credit').value;
     let savedata = {name: name, lastname: lastname, birth: birth, cpf: cpf, rg: rg, credit: credit};
     return this.verify(savedata);
    };
    verify(savedata) {
     console.log(savedata);
     if(savedata.name == '') {
         return this.msg();
     }
    };
    msg() {
      var box = document.querySelector('.hiddenmsg');
      box.classList.remove("hiddenmsg");
      box.classList.add("msg");
      document.querySelector('#pm').innerHTML= `Please Inform your name!`;
      document.querySelector('#closebutton').addEventListener('click', () => {
          box.classList.remove("msg");
          box.classList.add("hiddenmsg");
      });
    };
};
var Processdata = new processdata;