class Eleitor{
    constructor(nome, idade, titulo){
        this.nome = nome
        this.idade = idade
        this.titulo = titulo
    }

    verificaVoto(){
        let idade = this.idade

        if(idade < 16){
            return `o voto não é permitido pois não atinge a idade mínima!`   
        }else if(idade >= 16 && idade < 18){
            return `o voto é facultativo!`
        }else if(idade >= 18 && idade <= 70){
            return `o voto é obrigatório!`
        }
    }
}