let info = ['Jubiscleusa', 'Joana', '16', '@JubiJoana'];
//let [nome, sobrenome, idade, instagram] = info;
//console.log(`Nome: ${nome}, Sobrenome: ${sobrenome}, Idade: ${idade}, Insta: ${instagram}`);
let [nome, sobrenome, , instagram] = info;
console.log(nome, sobrenome, instagram);
let [companyname, adress, capital=700000] = ['New Wave', 'Online Store'];
console.log(`Company: ${companyname} adress: ${adress} Capital: ${capital}`);

let criar = () => [20, 40000, 15];
let [level, XP, strength] = criar();
console.log(`Player Level: ${level} XP: ${XP} Player strength: ${strength}`);