let nome = 'Gabriel Santos Silva';
let change = nome.slice(0, 15);
//let change2 = nome.slice(-4);
console.log(change);


/*
O metodo slice(-,-), pega o conteúdo da string por letras, o 1 paramêtor é onde ele deve começar e o segundo quantos deve pegar.
*/ 
let nome2 = 'zezin da silva pereira';
let sub = nome2.substring(0, 10);
console.log(sub);
/*
O substring() é praticamente a mesma coisa do slice(), a unica diferença é que o slice aceita valores negativos.
*/
/*
Támbem tem o subtr(), a diferença desse é que no segundo caractere, ele pega em vez da posição final a quantidade de linhas.
*/
/*
O método replace('procurar', 'substituir'), como o proprio nome já diz substitui um valor por outro.
*/
let gerente = 'Antonio augusto francisco';
gerente = gerente.replace('augusto', 'Augusto');
console.log(gerente);
let favgame = 'Eu gosto de Free Fire';
let newgame = favgame.replace('Free Fire', 'Calf of duty');
console.log(favgame);
console.log(`Opa, ${newgame.toUpperCase()}`); //tolowercase()
//concat():
let first = 'Gabriel';
let last = 'santos';
let showname = first.concat(last);
console.log(showname);

/*
 A função trim(), remove todos os espaços de uma string!
 Ela é perfeita para quando um usuário digita muitos espaços!
*/
let spaces = '      Gabriel         ';
let res = spaces.trim();
console.log(`resultado:`, res);
//Para achar um determinado caractere:
let charuse = 'blablablaue';
let char = charuse.charAt(5);
//ou:
char = charuse[5];
console.log(char);
// o split(), além de separar o array, voçê tambem pode expecificar aonde.
let num = '555+2';
let newnum = num.split('+');
console.log(newnum);