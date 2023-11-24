function fazerLogin() {
    var loginUsuario = usuario.value
    var loginSenha = senha.value

    if (loginUsuario.length <= 0 || loginSenha.length <= 0) {

        var loadingDiv = document.getElementById("loading");
        loading.style.display = "block"

        setTimeout(function () {
            balaoFalaErro.style.display = "block"
            loading.style.display = "none"
        }, 1500)

    }

    else {

        console.log("FORM LOGIN: ", loginUsuario);
        console.log("FORM SENHA: ", loginSenha);

        fetch("/usuarios/fazerLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: loginUsuario,
                senhaServer: loginSenha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO fazerLogin()!")
            console.log(resposta)

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.NOME_USUARIO = json.nomeUsuario;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                });

                var loadingDiv = document.getElementById("loading");
                loading.style.display = "block"

                setTimeout(function () {
                    location.href = '../perfilFeed.html'
                }, 2800)

            } else {

                console.log("Senha Incorreta!");

                resposta.text().then(texto => {
                    console.error(texto);
                });

                var loadingDiv = document.getElementById("loading");
                loading.style.display = "block"

                setTimeout(function () {
                    balaoFalaErro.style.display = "block"
                    loading.style.display = "none"
                }, 1500)

            }

        }).catch(function (erro) {
            console.log(erro);
        })

    }

}