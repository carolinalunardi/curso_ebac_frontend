function Filme(nome) {
    this.nome = nome;

    this.nomeDoFilme = function() {
        console.log("O nome do filme é " + this.nome);
    }
}

function Detalhes(nome, tipo, duracao) {
    this.tipo = tipo;
    this.duracao = duracao;

    this.tipoDoFilme = function() {
        console.log("Esse é um filme de " + this.tipo);
    }
    this.duracaoDoFilme = function() {
        console.log("Com duração de " + this.duracao + " minutos");
    }

    Filme.call(this, nome);
}

const filme1 = new Detalhes("O retorno dos que não foram", "suspense", 60);
filme1.nomeDoFilme();
filme1.tipoDoFilme();
filme1.duracaoDoFilme();

const filme2 = new Detalhes("As Patricinhas do Brás", "Comédia", 80);
filme2.nomeDoFilme();
filme2.tipoDoFilme();
filme2.duracaoDoFilme();

const filme3 = new Detalhes("1001 Vira-latas", "Drama", 120);
filme3.nomeDoFilme();
filme3.tipoDoFilme();
filme3.duracaoDoFilme();


