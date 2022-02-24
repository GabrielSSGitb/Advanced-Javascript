let pessoasinha = {
    nome: "Gabriel",
    sobrenome: "Santos",
    cargo: 'Programador',
    social: {
       facebook: "GabrieSS",
       Instagram: "GabrielSS25"
    },
    
    maisinfo: function() {
        console.log(` Suas Redes Sociais:\n FaceBook: ${this.social.facebook} \n Instagram: ${this.social.Instagram}`); 
    }
};
//desconstrução é pegar um dado e transformar em uma váriavel!

let { nome, sobrenome, cargo:profissao, idade = 16 } = pessoasinha;
console.log(nome, sobrenome, profissao, idade); // : Muda o nome da var!
sobrenome = 'Sikeira';
console.log(`${nome} ${sobrenome} é um ${profissao}, tem ${idade} anos!`);
pessoasinha.maisinfo();
