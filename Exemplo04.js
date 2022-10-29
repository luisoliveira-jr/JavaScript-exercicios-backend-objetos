const produtosConsumidos = [
    {
        nome: "Pão de Alho",
        precoUnit: 1500,
        quatidade: 3
    },
    {
        nome: "Cerveja",
        precoUnit: 1000,
        quatidade: 2
    },
    {
        nome: "Agua",
        precoUnit: 500,
        quatidade: 1
    }
];

const cartao = {
    nome: "José",
    idade: 30,
    produtosConsumidos
};

console.log(cartao.nome); //José
console.log(cartao.idade); //30
cartao.idade = 31;
console.log(cartao.idade); //31
console.log(cartao.produtosConsumidos[0]); //Pão de alho
console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit); //preço do ultimo elemento do array
