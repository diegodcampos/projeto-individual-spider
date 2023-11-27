var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/graficoCrimes/:idUsuario", function (req, res) {
    medidaController.selectCrimes(req, res);
})

router.get("/graficoAjudas/:idUsuario", function (req, res) {
    medidaController.selectAjudas(req, res);
})

router.get("/listaCrimes/:idUsuario", function (req, res) {
    medidaController.selectTitulos(req, res);
})

module.exports = router;