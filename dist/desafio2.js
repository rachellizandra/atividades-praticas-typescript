"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
console.log(`Nome da pessoa1 ${pessoa1.nome}, idade ${pessoa1.idade} e profissao ${pessoa1.profissao} \n`);
console.log(`Nome da pessoa1 ${pessoa2.nome}, idade ${pessoa2.idade} e profissao ${pessoa2.profissao} \n`);
console.log(`Nome da pessoa1 ${pessoa3.nome}, idade ${pessoa3.idade} e profissao ${pessoa3.profissao} \n`);
console.log(`Nome da pessoa1 ${pessoa4.nome}, idade ${pessoa4.idade} e profissao ${pessoa4.profissao} \n`);
