function fazerLogin() {
    var loginUsuario = usuario.value
    var loginSenha = senha.value

    if (loginUsuario.length <= 0 || loginSenha.length <= 0) {
        alert("Nome ou senha incorretos, preencha novamente")
    }
    
    else {
        location.href = '../perfil/perfilFeed.html'
    }
}