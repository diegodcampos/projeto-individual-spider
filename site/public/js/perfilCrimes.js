function registroOcorrencia() {
    var nomeCrime = tituloCrime.value
    var dtCrime = dataCrime.value
    var ajudaBot = spiderBot.value

    if (nomeCrime.length <= 0 || dtCrime.length <= 0 || ajudaBot == 0) {

        var loadingDiv = document.getElementById("loadingCrime");
        loadingCrime.style.display = "block"

        setTimeout(function () {
            loadingCrime.style.display = "none"
            pPeter.style.display = "block"
        }, 2000)

    }

    else {

        var loadingDiv = document.getElementById("loadingCrime");
        loadingCrime.style.display = "block"

        setTimeout(function () {
            loadingCrime.style.display = "none"
            imgCheckEsq.style.display = "block"
            pPeter.style.display = "none"

            setTimeout(function () {
                imgCheckEsq.style.display = "none"
            }, 4000);

        }, 2000)

    }
}

function registroSolucao() {
    var resolucao = comoResolver.value
    var spiderAjuda = ajudaAranha.value

    if (resolucao.length <= 0 || spiderAjuda == 0) {

        var loadingDiv = document.getElementById("loadingResolucao");
        loadingResolucao.style.display = "block"

        setTimeout(function () {
            loadingResolucao.style.display = "none"
            pPeter.style.display = "block"
        }, 2800)

    }

    else {

        var loadingDiv = document.getElementById("loadingResolucao");
        loadingResolucao.style.display = "block"

        setTimeout(function () {
            loadingResolucao.style.display = "none"
            imgCheckDir.style.display = "block"
            pPeter.style.display = "none"

            setTimeout(function () {
                imgCheckDir.style.display = "none"
            }, 4000);

        }, 2800)

    }
}

function sairPerfil() {
    var loadingDiv = document.getElementById("loading");
    loading.style.display = "block"

    setTimeout(function () {
        location.href = '../public/index.html'
    }, 2800)
}