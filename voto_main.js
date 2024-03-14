let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')
let mensagensErro = ''

verificar.addEventListener('click', () => {
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let titulo = document.getElementById('titulo').value
    document.getElementById('mensagemNome').textContent = ''
    document.getElementById('mensagemIdade').textContent = ''
    document.getElementById('mensagemTitulo').textContent = ''

    if (isNaN(idade)) {
        mensagensErro += 'Campo inválido!'
        document.getElementById('mensagemIdade').textContent = 'Campo inválido!'
    }

    if (!Number.isInteger(Number(titulo))) {
        mensagensErro += 'Campo inválido!'
        document.getElementById('mensagemTitulo').textContent = 'Campo inválido!'
    }

    if (mensagensErro !== '') {
        resposta.innerHTML = ''
        return
    }

    idade = Number(idade)
    titulo = Number(titulo)

    const cidadao = new Eleitor(nome, idade, titulo)
    let mensagem = cidadao.verificaVoto()

    resposta.innerHTML = ''
    resposta.innerHTML = `Para o eleitor denominado ${cidadao.nome}, com o título de número "${cidadao.titulo}", e com ${cidadao.idade} anos de idade, ${mensagem}`
})
