const botao = document.querySelector('.btn-gerar-conselho')
const numeroConselho = document.querySelector('.conselho-id')
const textoConselho = document.querySelector('.texto-conselho')

async function gerarConselho(){
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    const dadosConselho = await resposta.json()

    const idConselho = await dadosConselho.slip.id
    const conselho = await dadosConselho.slip.advice

    numeroConselho.innerHTML = `#${idConselho}`
    textoConselho.innerHTML = `"${conselho}"`
}

gerarConselho()

botao.addEventListener('click', gerarConselho)