let contando = [1, 2, 3, 4, 5];
let outrosn = [...contando, 6, 7, 8, 9, 10];
console.log(outrosn);

let programador = {
    nome: "Gabriel",
    idade: 16,
    area: "Front-end",
};
let maininfo = {
    ...programador, 
    Capacitações: {
        MarkDown: "HTML/CSS3", Linguagens: "Javascript, Typescript, PHP"
    }
};
console.log(maininfo);

function adicionadados(dados) {
    let info = {
        ...dados,
        area: "Back-end",
        Linguagens: "Python, Ruby, C#, C++, Java"
    };
    return info
}; 
console.log(adicionadados({nome: "Fernanda", sobrenome: "Gentile", idade: 20}));