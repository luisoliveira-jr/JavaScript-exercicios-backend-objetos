const pessoa = {
    nome: "José",
    idade: 30,
    cidade: "Salvador",
    profissao: "Dev"
};

const endereco = {
    rua: "Av 23 de maio",
    numero: 330,
    bairro: "Liberdade",
};

// Spread ...

const objetoFundido = {
    ...pessoa,
    ...endereco
}

console.log(objetoFundido);
