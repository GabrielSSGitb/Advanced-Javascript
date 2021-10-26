/* loop for
function acao() {
    let texto = '';
    for(let i = 0; i <= 20; i++) {
        texto = texto + i + '<br/>'
    }
  document.getElementById('demo').innerHTML= texto;  
};*/

//loop for array:
function acao() {
let Carros = ['Fuscão', 'uno', 'Spider', 'Panamera'];
let marca = ['Volksvagem', 'Fiat', 'Ferrari', 'Porche'];
let ano = [2000, 3000, 2040, 2050];
let html = `<table> 
  <tr>
  <th>Carros</th>
  <th>Marca</th>
  <th>Ano</th>
  </tr>
`

for(let i in Carros) {
  html += `<tr>
    <td>${Carros[i]}</td>
    <td>${marca[i]}</td>
    <td>${ano[i]}</td>
  </tr>
  `
  
}
html += '</table>';
document.getElementById('demo').innerHTML= html;
};
