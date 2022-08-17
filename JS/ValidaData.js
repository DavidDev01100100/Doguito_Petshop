const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value)
    let mensagem = ""

    if (!maiorQue18(dataRecebida)){
    mensagem = "Você dever ser maior de 18 anos para ae cadastrar"
    }

    input.setCustomValidity(mensagem)    
}

function maiorque18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCfullYear() + 18, data.getUTCfullMonth(), data.getUTCfullDate())

    return dataMais18 <= dataAtual 

}