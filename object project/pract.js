let gerente = {
       nome: "Augusto",
       sobrenome: "Ribeiro",
       cargo: "Gerente do Restaurant",
       maisinfo: {
          mãe: "Dona claudia",
          pai: "Patrão Bruce",
          cidade: "Rio de Janeiro",
          bairro: "Rei delas N°220"
       },
       social: {
           Instagram: "augustindalapa123",
           facebook: "oaugustoribeiro123"
       }
};

let garconete = {
    nome: "Fernanda",
    sobrenome: "Santos",
    cargo: "Garçonete",
    idade: 35,
    maisinfo: {
       mãe: "Juseline",
       pai: "Marcos",
       cidade: "São Paula",
       bairro: "Paraibas N°122"
    },
    social: {
        Instagram: "FernandaSantos444",
        facebook: "FernandaDosSantos444"
    }
};
var {nome, sobrenome, idade = 32, cargo, maisinfo:{cidade}, maisinfo:{bairro},
    social:{Instagram}, social:{facebook}
    } = gerente;

function searchuser() {
   // var tbody = document.querySelector('#tbody');
   var table = document.querySelector('#table');
   var askname = document.querySelector('#askname').value;
    if(askname == '') {
        alert('PorFavor, digite um usuário!!!')
        
    }else if(askname == 'Augusto' || 'Fernanda') {
        document.querySelector('.main').style.display= 'none';
       var name = document.querySelector('#showname').innerHTML = `👨‍✈️ ${nome} ${sobrenome}: `;
    
        var html = `
          <table>
           <tr>
             <th>Cargo</th>
             <th>Idade</th>
             <th>Cidade</th>
             <th>Bairro</th>
             <th>Instagram</th>
             <th>FaceBook</th>
           </tr>
           <tr>
             <td>${cargo}</td>
             <td>${idade}</td>
             <td>${cidade}</td>
             <td>${bairro}</td>
             <td>${Instagram}</td>
             <td>${facebook}</td>
           </tr>
          </table>
        `;
        var table = document.querySelector('#table').innerHTML = html;
    }else if(askname == "Fernanda") {
      document.querySelector('.main').style.display= 'none';
      var html2 = `
      
      `;
      table.innerHTML = htm2;
    }
      
    };
    
