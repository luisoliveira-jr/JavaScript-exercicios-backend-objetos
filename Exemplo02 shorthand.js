//Shorthand "Atalho" - Quando existe um objeto com o mesmo nome de uma propriedade, pode-se utilizar apenas o nome da propriedade, no caso "altura" e "carro":

const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: "2020",
    potencia: 80
};

const altura = 1.73;

const pessoa = {
    nome: "José",
    idade: 30,
    altura,
    temCNH: true,
    apelidos: ["Ju", "Juninho", "Juca"],
    carro
};

console.log(pessoa);

