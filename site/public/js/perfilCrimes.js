function registroOcorrencia() {
    var nomeCrime = tituloCrime.value
    var dtCrime = dataCrime.value
    var ajudaBot = Number(spiderBot.value)
    var idUsuario = Number(sessionStorage.ID_USUARIO);

    if (nomeCrime.length <= 0 || dtCrime.length <= 0 || ajudaBot == 0) {

        var loadingDiv = document.getElementById("loadingCrime");
        loadingCrime.style.display = "block"

        setTimeout(function () {
            loadingCrime.style.display = "none"
            pPeter.style.display = "block"
        }, 2000)

        return false;

    }

    fetch("/usuarios/registroOcorrencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            crimeServer: nomeCrime,
            dataServer: dtCrime,
            botServer: ajudaBot,
            idUsuarioServer: idUsuario
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {

                fetch("/usuarios/registroIdCrime", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        crimeServer: nomeCrime,
                        dataServer: dtCrime
                    }),
                })
                    .then(function (resposta2) {
                        console.log("resposta: ", resposta2);

                        resposta2.json().then(json => {
                            console.log(json);
                            console.log(JSON.stringify(json));
                            sessionStorage.ID_CRIME = json.crimeId;
                        });
                    })

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

            } else {

                console.log(nomeCrime, dtCrime, ajudaBot, idUsuario)
                throw ("Houve um erro ao cadastrar")

            }

        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;

}

function registroSolucao() {
    var resolucao = comoResolver.value
    var spiderAjuda = ajudaAranha.value
    var idCrime = Number(sessionStorage.ID_CRIME);

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

        fetch("/usuarios/registroSolucao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                resolucaoServer: resolucao,
                ajudaServer: spiderAjuda,
                idCrimeServer: idCrime
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    setTimeout(function () {
                        loadingResolucao.style.display = "none"
                        imgCheckDir.style.display = "block"
                        pPeter.style.display = "none"

                        setTimeout(function () {
                            imgCheckDir.style.display = "none"
                        }, 4000);

                    }, 2000)

                } else {

                    console.log(resolucaoCrime, spiderAjuda, idCrime)
                    throw ("Houve um erro ao cadastrar")

                }

            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

    }
}



function easterEgg() {

    var somaBilheteria = Number(1131927996 + 1054431855 + 894983373)

    var modal = document.querySelector("dialog")

    var listaFilmes = ['Homem-Aranha: Longe de Casa (2019)',
        'Homem-Aranha: Sem Volta Para Casa (2021)', 'Homem-Aranha 3 (2007)']

    modal.showModal()

    dialogTexto.innerHTML = ''

    for (contador = 0; contador < listaFilmes.length; contador++) {
        dialogTexto.innerHTML += listaFilmes[contador] + '<br>'
    }

    dialogTexto.innerHTML += `<h1>Parabéns! Vejo que seu sentido aranha está ótimo!</h1>
    <h2>Sabia que as maiores bilheterias de filmes do homem-aranha são essas?</h2> <br> Aqui está a soma em dólares, destes três filmes: <b>${somaBilheteria}</b> <br>
    Mais de três BILHÕES DE DÓLARES! O cabeça de teia arrasa nos cinemas!`

}

function sairPerfil() {
    var loadingDiv = document.getElementById("loading");
    loading.style.display = "block"

    setTimeout(function () {
        sessionStorage.clear()
        location.href = '../index.html'
    }, 2800)
}