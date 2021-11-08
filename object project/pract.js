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

let garçonete = {
    nome2: "Fernanda",
    sobrenome2: "Santos",
    cargo2: "Garçonete",
    idade2: 35,
    maisinfo2: {
       mãe: "Juseline",
       pai: "Marcos",
       cidade2: "São Paulo",
       bairro2: "Paraibas N°122"
    },
    social2: {
        Instagram2: "FernandaSantos444",
        facebook2: "FernandaDosSantos444"
    }
};
var {nome, sobrenome, idade = 32, cargo, maisinfo:{cidade}, maisinfo:{bairro},
    social:{Instagram}, social:{facebook}
    } = gerente;

function searchuser() {
    var askname = document.querySelector('#askname').value;
    if (askname == '') {
      alert('Porfavor, digite um usuário!!!')
    }else if (askname == 'Augusto') {
      document.querySelector('.main').style.display= 'none';
     document.querySelector('#showname').innerHTML= `👨‍✈️ ${nome} ${sobrenome}:`;
     
     var html = `
        <table>
            <thead>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Idade</th>
            <th>Cargo</th>
            <th>Cidade</th>
            <th>Bairro</th>
            </thead>
            <tr>
             <td>${nome}</td>
             <td>${sobrenome}</td>
             <td>${idade}</td>
             <td>${cargo}</td>
             <td>${cidade}</td>
             <td>${bairro}</td>
             
            </tr>
        </table>
     `;
     document.querySelector('#table').innerHTML = html;
    }else if (askname == 'Fernanda') {
      var {
        nome2, sobrenome2, cargo2, maisinfo2:{cidade2}, maisinfo2:{bairro2}, social2:{Instagram2}, social2:{facebook2}, idade2} = garçonete;
      document.querySelector('.main').style.display= 'none';
      document.querySelector('#showname').innerHTML= `👩‍✈️ ${nome2} ${sobrenome2}`;
      html = `
      <table>
      <thead>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Idade</th>
            <th>Cargo</th>
            <th>Cidade</th>
            <th>Bairro</th>
      </thead>
      <tr>
             <td>${nome2}</td>
             <td>${sobrenome2}</td>
             <td>${idade2}</td>
             <td>${cargo2}</td>
             <td>${cidade2}</td>
             <td>${bairro2}</td>
            </tr>
      </table>
      `;
      document.querySelector('#table').innerHTML = html;
    }
};