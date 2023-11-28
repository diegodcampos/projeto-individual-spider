var usuarioModel = require("../models/usuarioModel");

function fazerLogin(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.fazerLogin(nome, senha)
            .then(
                function (resultadoFazerLogin) {
                    console.log(`\nResultados encontrados: ${resultadoFazerLogin.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoFazerLogin)}`);

                    if (resultadoFazerLogin.length == 1) {
                        res.json({
                            id: resultadoFazerLogin[0].idUsuario,
                            nome: resultadoFazerLogin[0].nomeUsuario,
                        });

                    } else {
                        var loadingDiv = document.getElementById("loading");
                        loading.style.display = "block"

                        setTimeout(function () {
                            balaoFalaErro.style.display = "block"
                            loading.style.display = "none"
                        }, 1500)

                    }

                }

            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function fazerCadastro(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;
    var heroiFavorito = req.body.heroiServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (heroiFavorito == undefined) {
        res.status(400).send("Seu herói está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.fazerCadastro(nome, senha, heroiFavorito)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function registroOcorrencia(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var crime = req.body.crimeServer;
    var crimeData = req.body.dataServer;
    var bot = req.body.botServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (crime == undefined) {
        res.status(400).send("Seu crime está undefined!");
    } else if (crimeData == undefined) {
        res.status(400).send("Sua data está undefined!");
    } else if (bot == undefined) {
        res.status(400).send("Seu bot está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.registroOcorrencia(crime, crimeData, bot, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);

                    // res.json({
                    //     crime: resultado[0].idCrime
                    // });

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function registroIdCrime(req, res) {
    var crime = req.body.crimeServer;
    var crimeData = req.body.dataServer;

    if (crime == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (crimeData == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.registroIdCrime(crime, crimeData)
            .then(
                function (registroIdCrimeCadastro) {
                    console.log(`\nResultados encontrados: ${registroIdCrimeCadastro.length}`);
                    console.log(`Resultados: ${JSON.stringify(registroIdCrimeCadastro)}`);

                    res.json({
                        crimeId: registroIdCrimeCadastro[0].idCrime
                    });

                }

            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function registroSolucao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var solucao = req.body.resolucaoServer;
    var ajuda = req.body.ajudaServer;
    var idCrime = req.body.idCrimeServer;

    // Faça as validações dos valores
    if (solucao == undefined) {
        res.status(400).send("Sua solucao está undefined!");
    } else if (ajuda == undefined) {
        res.status(400).send("Sua ajuda está undefined!");
    } else if (idCrime == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.registroSolucao(solucao, ajuda, idCrime)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function updateCrimes(req, res) {

    usuarioModel.updateCrimes()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    fazerLogin,
    fazerCadastro,
    registroOcorrencia,
    registroSolucao,
    registroIdCrime,
    updateCrimes
}