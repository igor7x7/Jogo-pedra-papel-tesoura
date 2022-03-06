const saidaEscolhaComputador = document.getElementById('escolha-computador')
const suaEscolha = document.getElementById('sua-escolha')
const resultado = document.getElementById('resultado')
const escolhas = document.querySelectorAll('button')

let escolhaJogador
let escolhaComputador

escolhas.forEach(escolhas => escolhas.addEventListener('click', (e) => {
    escolhaJogador = e.target.id
    suaEscolha.innerHTML = escolhaJogador
    geradorComputadorEscolha()
    resultadoFinal()
}))

function geradorComputadorEscolha() {
    const numeroRandon = Math.floor(Math.random() * escolhas.length + 1)
    if (numeroRandon === 1) {
        escolhaComputador = 'pedra'
    }
    if (numeroRandon === 2) {
        escolhaComputador = 'papel'
    }
    if (numeroRandon === 3) {
        escolhaComputador = 'tesoura'
    }

    saidaEscolhaComputador.innerHTML = escolhaComputador
}


function resultadoFinal() {
    if (escolhaComputador === escolhaJogador) {
        resultado.innerHTML = "Empate!"
    }
    if (escolhaComputador === 'pedra' && escolhaJogador === 'tesoura') {
        resultado.innerHTML = "Você perdeu! :´("
    }
    if (escolhaComputador === 'pedra' && escolhaJogador === 'papel') {
        resultado.innerHTML = "Você venceu! ;)"
    }
    if (escolhaComputador === 'papel' && escolhaJogador === 'pedra') {
        resultado.innerHTML = "Você perdeu! :´("
    }
    if (escolhaComputador === 'papel' && escolhaJogador === 'tesoura') {
        resultado.innerHTML = "Você venceu! ;)"
    }
    if (escolhaComputador === 'tesoura' && escolhaJogador === 'papel') {
        resultado.innerHTML = "Você perdeu! :´("
    }
    if (escolhaComputador === 'tesoura' && escolhaJogador === 'pedra') {
        resultado.innerHTML = "Você venceu! ;)"
    }


}
