// Como podemos melhorar o esse código usando TS? 

enum Profissao{
    Atriz,
    Padeiro,
}

interface IPessoa{
    nome: string;
    idade: number
    profissao: Profissao
}

let pessoa1: IPessoa ={
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: IPessoa ={
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: IPessoa ={
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
}

let pessoa4: IPessoa ={
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

console.log(`Nome da pessoa1 ${pessoa1.nome}, idade ${pessoa1.idade} e profissao ${pessoa1.profissao} \n`)
console.log(`Nome da pessoa1 ${pessoa2.nome}, idade ${pessoa2.idade} e profissao ${pessoa2.profissao} \n`)
console.log(`Nome da pessoa1 ${pessoa3.nome}, idade ${pessoa3.idade} e profissao ${pessoa3.profissao} \n`)
console.log(`Nome da pessoa1 ${pessoa4.nome}, idade ${pessoa4.idade} e profissao ${pessoa4.profissao} \n`)
