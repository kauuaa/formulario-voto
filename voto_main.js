let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')

verificar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let titulo = Number(document.getElementById('titulo').value)

    console.log("Dados do formulário = " + nome, idade, titulo)
})

const cidadao = new eleitor()
    cidadao.nome = nome
    cidadao.idade = idade
    cidadao.titulo = titulo

    console.log('Instância do objeto', cidadao)
