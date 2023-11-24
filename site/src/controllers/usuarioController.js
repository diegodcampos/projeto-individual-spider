var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

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
                    console.log(`Resultados: ${JSON.stringify(resultadoFazerLogin)}`); // transforma JSON em String

                    // if (resultadoFazerLogin.length == 1) {
                    //     res.json({
                    //         id: resultadoFazerLogin[0].idUsuario,
                    //         nome: resultadoFazerLogin[0].nomeUsuario,
                    //     })
                    // } else {
                    //     res.status(204).json({ aquarios: [] });
                    // } 

                    //     if (resultadoAquarios.length > 0) {
                    //         res.json({
                    //             id: resultadoFazerLogin[0].idUsuario,
                    //             nome: resultadoFazerLogin[0].nomeUsuario,
                    //             senha: resultadoFazerLogin[0].senhaUsuario,
                    //             aquarios: resultadoAquarios
                    //         });
                    //     }
                    //     else {
                    //         res.status(204).json({ aquarios: [] });
                    //     }

                    //  else if (resultadoFazerLogin.length == 0) {
                    //     res.status(403).send("Nome e/ou senha inválido(s)");
                    // } else {
                    //     res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    // }

                    if (resultadoFazerLogin.length == 1) {
                        res.json({
                            id: resultadoFazerLogin[0].idUsuario,
                            nome: resultadoFazerLogin[0].nomeUsuario,
                        });

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

module.exports = {
    fazerLogin,
    fazerCadastro
}