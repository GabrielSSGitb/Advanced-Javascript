function gerartabu() {
var num = document.querySelector('#number').value;
var box = document.querySelector('#box');
      
    if(num == 0) {
        alert('Digite um numero!')
    }else {
        box.innerHTML= ''
        for(let i = 1; i <= 10; i++) {
            let list = document.createElement('option');
            list.text = `${num} x ${i} = ${num * i}`;
            box.value = `list${i}`
            box.appendChild(list)
        }
    }
};
