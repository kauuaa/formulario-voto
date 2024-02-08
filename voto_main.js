let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')

verificar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let titulo = Number(document.getElementById('titulo').value)

    console.log("Dados do formulário = " + nome, idade, titulo)


const cidadao = new Eleitor() 

    cidadao.nome = nome
    cidadao.idade = idade
    cidadao.titulo = titulo

    console.log(`Instância do objeto, ${cidadao}`)

    let mensagem = cidadao.verificaVoto()
    
    resposta.innerHTML = ''
    resposta.innerHTML = `Para o eleitor denominado ${cidadao.nome}, com o título de número "${cidadao.titulo}", e com ${cidadao.idade} anos de idade, ${mensagem}`
    
})
