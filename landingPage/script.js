var voltar = false

function infoPeter() {

    if (voltar) {
        botaoPeter.innerHTML = "<b>Peter</b>"
        textoPeter.style.display = "none"
        divMiles.style.display = 'block'

    } else {
        botaoPeter.innerHTML = "<b>Voltar</b>"
        textoPeter.style.display = "block"
        divMiles.style.display = 'none'
    }

    voltar = !voltar

    textoPeter.innerHTML = `<p>Peter Parker é um jovem estudante de ensino médio que adquiriu habilidades
     sobre-humanas após ser picado por uma aranha radioativa. Essas habilidades incluem força
     , agilidade, reflexos aprimorados e a capacidade de escalar paredes.
     Peter Parker decide usar seus poderes para combater o crime como o icônico super-herói Homem-Aranha.
     Ele é conhecido por seu traje vermelho e azul, bem como por suas teias 
     lançadas a partir de dispositivos que ele mesmo criou. Além de suas responsabilidades 
     como super-herói, Peter enfrenta desafios pessoais, como equilibrar sua vida 
     como estudante, fotógrafo e, mais tarde, como cientista.</p>`
}

function infoMiles() {

    if (voltar) {
        botaoMiles.innerHTML = "<b>Miles</b>"
        textoMiles.style.display = "none"
        divPeter.style.display = "block"

    } else {
        botaoMiles.innerHTML = "<b>Voltar</b>"
        textoMiles.style.display = "block"
        divPeter.style.display = "none"
    }

    voltar = !voltar
    textoMiles.innerHTML = `<p>Miles Morales é um adolescente afro-latino que vive no universo Marvel 
    Ultimate,um universo paralelo ao principal da Marvel.
    Miles ganhou seus poderes de aranha após ser picado por uma aranha 
    geneticamente modificada, assim como o Peter Parker. 
    O seu traje tem como destaque as cores preto e vermelho, sendo muito 
    popular entre os fãs, ele compartilha algumas 
    das habilidades clássicas do Homem-Aranha, como a capacidade de escalar paredes 
    e a agilidade sobre-humana. No entanto, ele também possui poderes únicos, como 
    a capacidade de dar um "choque venenoso" e camuflagem.</p>`
}