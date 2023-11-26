var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/fazerCadastro", function (req, res) {
    usuarioController.fazerCadastro(req, res);
})

router.post("/fazerLogin", function (req, res) {
    usuarioController.fazerLogin(req, res);
});

router.post("/registroOcorrencia", function (req, res) {
    usuarioController.registroOcorrencia(req, res);
});

router.post("/registroIdCrime", function (req, res) {
    usuarioController.registroIdCrime(req, res);
});

router.post("/registroSolucao", function (req, res) {
    usuarioController.registroSolucao(req, res);
});

module.exports = router;