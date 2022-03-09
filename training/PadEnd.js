function creditcard() {
 let card = document.querySelector('#ask').value;
 let hidecard = card.slice(13);
 let showcard = document.querySelector('#show');
 let h1 = document.createElement('h1');
 document.querySelector('input').style.display='none';
 document.querySelector('label').style.display='none';
 document.querySelector('#btn').style.display='none';
 h1.textContent = `Your Credit Card is: <br> ${hidecard.padStart(16, '*')}`;
 showcard.appendChild(h1);
};
function callback() {
    setTimeout(creditcard, 3000);
};
/*let card = '6784531297843293';
function creditcard() {
  let hidecard = card.slice(13);
  console.log(hidecard.padStart(16, '*'));
};
console.log('Your Credit card is:');
setTimeout(creditcard, 3000);*/