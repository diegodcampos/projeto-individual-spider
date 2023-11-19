function registroOcorrencia() {
    var nomeCrime = tituloCrime.value
    var dtCrime = dataCrime.value
    var ajudaBot = spiderBot.value

    if (tituloCrime.length <= 0 || dtCrime.length <= 0 || spiderBot == 0) {
        alert("Insira corretamente as informações no cadastro")
    }
}

function registroSolucao() {
    var resolucao = comoResolver.value
    var spiderAjuda = ajudaAranha.value

    if (resolucao.length <= 0 || spiderAjuda == 0) {
        alert("Insira corretamente as informações na resolução")
    }
}