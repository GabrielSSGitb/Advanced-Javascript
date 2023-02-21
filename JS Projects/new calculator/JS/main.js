class calculator {
    insert(num) {
        const showtext = document.querySelector('#showtext').value;

        while(showtext == '') {
            const number = document.querySelector('#shown1').value;
            document.querySelector('#shown1').value = number + num;
            showtext++
        };
        while(showtext != '') {
            const number2 = document.querySelector('#shown2').value;
            document.querySelector('#shown2').value = number2 + num;
            showtext++
        };
    };
    insertfunc(func) {
        const todo = document.querySelector('#showtext').value;
        document.querySelector('#showtext').value= func;
        this.process(func);
    };
    process(func) {
        const num1 = document.querySelector('#shown1').value;
        const num2 = document.querySelector('#shown2').value;
         if(func == "+") {
            document.querySelector('#showresult').value = num1 + num2;
        }else {
            alert('error');
        }
    };
    clear() {
        document.querySelector('#shown1').value= '';
        document.querySelector('#shown2').value= '';
        document.querySelector('#showresult').value= '';
        document.querySelector('#showtext').value= '';
    };
};
var Calculator = new calculator;