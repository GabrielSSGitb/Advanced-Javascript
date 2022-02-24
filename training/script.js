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
      if(savedata.name == "" || savedata.lastname == "") {
          alert('Please, inform your name!')
      }else if(savedata.birth == "" || savedata.birth < 8) {
          alert('Please, tell us your age!')
      }else if(savedata.cpf == "") {
          alert('Please, inform your CPF correctly!')
      }else {
          console.log(savedata);
      }
    };
};
var Processdata = new processdata;