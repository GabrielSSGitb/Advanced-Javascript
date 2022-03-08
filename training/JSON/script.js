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
       var box = document.querySelector('.hiddenmsg');
       let h3 = document.createElement('h3');
       let p = document.createElement('p');
       let span = document.createElement('span');
       h3.textContent= `Something went wrong!!!`;
       span.textContent= `x`;
       if(savedata.name == '') {
          p.textContent= `Please, inform your name!`;
          return this.msg(box, h3, p, span);
       }else if(savedata.lastname == '') {
         p.textContent= `Please, inform your lastname!`;
         return this.msg(box, h3, p, span);
       }else if(savedata.cpf == '' || savedata.cpf.length < 11 || savedata.cpf.length > 11) {
         p.textContent= `The CPF camp is invalid!`;
         return this.msg(box, h3, p, span);
       }else if(savedata.birth == '') {
         p.textContent= `Please, inform your birth date!`;
         return this.msg(box, h3, p, span);
       }else if(savedata.rg == '' || savedata.rg.length < 8 || savedata.rg.length > 8) {
         p.textContent= `The RG camp is invalid!`;
         return this.msg(box, h3, p, span);
       }else if(savedata.credit == '' || savedata.credit.length < 16 || savedata.credit.length > 16) {
         p.textContent= `The Credit Card camp is invalid!`;
         return this.msg(box, h3, p, span);
       }else {
          return this.info(savedata);
       }
    };
    info(savedata) {
     let table = document.createElement('table');
    };
    msg(box, h3, p, span) {
      box.classList.remove('hiddenmsg');
      box.classList.add('msg');
      box.appendChild(h3);
      box.appendChild(p);
      box.appendChild(span);
      return this.closemsg(box, h3, p, span);
    };
    closemsg(box, h3, p, span) {
      span.addEventListener('click', () => {
        box.removeChild(h3);
        box.removeChild(p);
        window.document.body.removeChild(box);
      })
    };
};
var Processdata = new processdata;