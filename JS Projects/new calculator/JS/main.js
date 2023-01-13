class calculator {
    insert(num) {
        const number = document.querySelector('#showvalue').value;
        document.querySelector('#showvalue').value= number + num;
    };
    clear() {
        document.querySelector('#showvalue').value= '';
        document.querySelector('#showresult').value= '';
    };
};
var Calculator = new calculator;