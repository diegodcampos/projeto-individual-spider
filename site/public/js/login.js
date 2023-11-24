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

        var loadingDiv = document.getElementById("loading");
        loading.style.display = "block"

        setTimeout(function () {
            location.href = '../public/perfilFeed.html'
        }, 2800)
        
    }
}