enum Trabalho {
    Designer,
    Publiciaria,
    Concurceira,
    Programadora
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'fran',
    idade: 22,
    profissao: Trabalho.Designer
};

let pessoa2: Humano = {
    nome: 'renata',
    idade: 25,
    profissao: Trabalho.Publiciaria
};

let pessoa3: Humano = {
    nome: 'assis',
    idade: 28,
    profissao: Trabalho.Concurceira
};

let pessoa4: Humano = {
    nome: "assis",
    idade: 28,
    profissao: Trabalho.Programadora
}