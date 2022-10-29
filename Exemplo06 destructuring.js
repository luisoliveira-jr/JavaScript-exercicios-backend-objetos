const pessoa = {
    nome: "José",
    idade: 30,
    cidade: "Salvador",
    profissao: "Dev"
};

// const nome = pessoa.nome;
// const idade = pessoa.idade;

// Desestruturação de objetos - Destructuring

// const { nome, idade } = pessoa;

// Pega as demais propriedades com spread ou reticências: ...

const { nome, idade, ...outros } = pessoa;

console.log(nome, idade);
console.log(outros);
