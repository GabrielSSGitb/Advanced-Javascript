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
        var h3 = document.createElement('h3');
        var p = document.createElement('p');
        var span = document.createElement('span');
        console.log(savedata);
     if(savedata.name == '' || savedata.lastname == '') {
         h3.textContent= `Something Went Wrong!!!`;
         p.textContent= `Please, Inform your name!`;
         span.textContent= `x`;
         return this.msg(box, h3, p, span);
     }else if(savedata.birth == '') {
        h3.textContent= `Something went Wrong!!!`;
        p.textContent= `Please, inform your birth to continue!`;
        span.textContent= `x`;
        return this.msg(box, h3, p, span);
     }else if(savedata.cpf == '' ||  savedata.cpf > 11 || savedata.cpf < 11) {
        h3.textContent= `Something went Wrong!!!`;
        p.textContent= `CPF camp is invalid!`;
        span.textContent= `x`;
        return this.msg(box, h3, p, span);
     }else if(savedata.rg == '' || savedata.rg > 8 || savedata.rg < 8) {
        h3.textContent= `Something went Wrong!!!`;
        p.textContent= `RG camp is invalid!`;
        span.textContent= `x`;
        return this.msg(box, h3, p, span);
     }else if(savedata.credit == '' || savedata.credit > 16) {
        h3.textContent= `Something went Wrong!!!`;
        p.textContent= `Please, inform your credit card!`;
        span.textContent= `x`;
        return this.msg(box, h3, p, span);
     }
    };
    msg(box, h3, p, span) {
      box.classList.remove("hiddenmsg");
      box.classList.add("msg");
      box.appendChild(h3);
      box.appendChild(p);
      box.appendChild(span);
      return this.closemsg(box, h3, p, span)
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