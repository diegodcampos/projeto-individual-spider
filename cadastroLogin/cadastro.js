function fazerCadastro() {
    var nomeUsuario = nome.value
    var senhaUsuario = senha.value
    var repetirSenha = confirmSenha.value
    var heroiFavorito = heroiFav.value

    if (nomeUsuario.length <= 0 || senhaUsuario.length <= 0 || 
        repetirSenha != senhaUsuario || heroiFavorito == 0) {
        alert('Preencha corretamente os campos de cadastro')
    }

    else {}
}