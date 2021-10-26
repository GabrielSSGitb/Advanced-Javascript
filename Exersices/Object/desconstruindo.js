let pessoasinha = {
    nome: "Gabriel",
    sobrenome: "Santos",
    cargo: 'Programador',
    social: {
       facebook: "GabrieSS",
       Instagram: "GabrielSS25"
    },
    
    maisinfo: function() {
        return `Tem ${this.idade} anos, e é um ${this.cargo}! Suas redes sociais são: \n Facebook: ${this.social.facebook} \n Instagram: ${this.social.Instagram}` 
    }
};
//desconstrução é pegar um dado e transformar em uma váriavel!

let { nome, sobrenome, cargo, idade = 16 } = pessoasinha;
console.log(nome, sobrenome, cargo, idade); // : Muda o nome da var!
sobrenome = 'Sikeira';
console.log(sobrenome, idade);