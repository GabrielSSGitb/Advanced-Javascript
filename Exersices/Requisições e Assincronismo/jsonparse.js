let developer = JSON.parse('{"nome": "Gabriel", "idade": "17", "area": "front-end"}');
console.log(developer.area);
let proggramer = '{"name": "Angelina", "age": 29, "area": "back-end"}';
proggramer = JSON.parse(proggramer);
console.log(proggramer.name);

//JSON.stringify:
//When sending a request you need to put it as a string, and vice-versa!
let porche = {model: "Cayman", year: 2022, state: "Germany"};
console.log(porche);
porche = JSON.stringify(porche);
console.log(porche);