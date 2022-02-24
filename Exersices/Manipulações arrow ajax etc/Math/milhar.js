var n1 = 500;
var n2 = 1000;
var s = n1 + n2;
if(s >= 1000) {
    s = s.toLocaleString().replace(",", ".");
    console.log(s);
}else {
    console.log('error')
}