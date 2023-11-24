function fazerCadastro() {
  var nomeUsuario = nome.value
  var senhaUsuario = senha.value
  var repetirSenha = confirmSenha.value
  var heroiFavorito = heroiFav.value

  if (nomeUsuario.length <= 0 || senhaUsuario.length <= 0 ||
    repetirSenha != senhaUsuario || heroiFavorito == 0) {

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
      balaoFalaErro.style.display = "none"
      balaoFala.style.display = "block"
      loading.style.display = "none"
    }, 2800)

    fetch("/usuarios/fazerCadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nomeUsuario,
        senhaServer: senhaUsuario,
        heroiServer: heroiFavorito
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          var loadingDiv = document.getElementById("loading");
          loading.style.display = "block"

          setTimeout(function () {
            balaoFalaErro.style.display = "none"
            balaoFala.style.display = "block"
            loading.style.display = "none"
          }, 2800)

        }

      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

  }

}
