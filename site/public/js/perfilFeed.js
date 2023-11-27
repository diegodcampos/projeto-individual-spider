function sairPerfil() {
    var loadingDiv = document.getElementById("loading");
    loading.style.display = "block"

    setTimeout(function () {
        sessionStorage.clear()
        location.href = '../index.html'
    }, 2800)
}