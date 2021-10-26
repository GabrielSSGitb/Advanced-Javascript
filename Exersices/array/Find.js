//O find() recebe de paramêtro: (item, index, array), não necessariamente presiça usar todos juntos.
//ele vai retornar o primeiro item que satisfaça a condição especificada!

let pessoas = ['Gabriel', 'Fernanda', 'Augusto', 'Miguel'];
 let pessoas2 = [];
 pessoas2 = pessoas.find((item) => {
     return (item == 'Augusto') ? true : false
 });
 console.log('Voçê Procurou o:',pessoas2);
 pessoas2 = pessoas.findIndex((item) => {
      return (item == 'Miguel') ? true : false
 });
 console.log('O minguel está na posição ->',pessoas2);
 let fulanos = [
     {id: 1,nome: 'Paulão', idade: 25},
     {id: 2,nome: 'Eduardo', idade: 40},
     {id: 3,nome: 'Fernanda', idade: 32},
 ];
 let fulanos2 = fulanos.find((item) => (item.nome == 'Fernanda') ? true : false);
 console.log(fulanos2);