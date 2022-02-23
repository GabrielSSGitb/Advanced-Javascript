let employee = {
    name: "Gabriel",
    age: 17,
    characteristics: ["Sorridente", "Engraçado", "Alegre", "top"]
};
console.log(employee.characteristics);

let company = {
    nome: "Taiton Games",
    tipo: "E-commerce",
    estado: "Minas Gerais",
    produtos: {
        produto1: "Case para controles",
        produto2: "Madara Action figure",
        produto3: "Xbox controller Home Charger"
    }
};
console.log(`  Busca de Négocios:
             Nome da empresa: ${company.nome}
             Tipo de négocio: ${company.tipo}
             Qual o Estado: ${company.estado}
             Exemplo de Produtos:
             ${company.produtos.produto1}
             ${company.produtos.produto2}
             ${company.produtos.produto3}
`);