let pessoasinha = {
    nome: "Gabriel",
    sobrenome: "Santos",
    cargo: 'Programador',
    social: {
       facebook: "GabrieSS",
       instagram: {
         url: '@Gabrielss25',
         seguidores: 2000,
       },
    },
    
};

//let {facebook, instagram} = pessoasinha.social;
//let {nome, sobrenome, social:{facebook}, social:{instagram}} = pessoasinha;
/*let {social:{instagram:{url:Instagram}}} = pessoasinha;
console.log(Instagram);*/
function pegarnomecompleto(obj) {
   return obj.nome+' '+obj.sobrenome
};
console.log('1 -',pegarnomecompleto(pessoasinha));

function pegarnomecompleto2({nome, sobrenome, twiter = 'GabrielOf225'}) {
    return `2 - ${nome} ${sobrenome} \n Siga me no Twiter: @${twiter}`
};
console.log(pegarnomecompleto2(pessoasinha));