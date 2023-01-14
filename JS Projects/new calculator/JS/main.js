class calculator {
    insert(num) {
        const number = document.querySelector('#shown1').value;
        document.querySelector('#shown1').value= number + num;
    };
    insertfunc(func) {
        const todo = document.querySelector('#showtext').value;
        document.querySelector('#showtext').value= func;

        if(func == '÷') {
    
        }else {
            alert('error')
        }
    };
    clear() {
        document.querySelector('#shown1').value= '';
        document.querySelector('#showresult').value= '';
        document.querySelector('#showtext').value= '';
    };
};
var Calculator = new calculator;