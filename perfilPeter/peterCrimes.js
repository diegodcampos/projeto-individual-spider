function registroOcorrencia() {
    var descricaoCrime = descCrime.value
    var dtCrime = dataCrime.value
    var estaResolvido = resolvido.value

    if (descricaoCrime.length <= 0 || dtCrime.length <= 0 || estaResolvido == 0) {
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