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

let totalAPagar = 0;
for (let produto of produtosConsumidos) {
    totalAPagar += produto.precoUnit * produto.quatidade;
}

const totalFormatado = (totalAPagar / 100).toFixed(2);

console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$ ${totalFormatado}.`);
