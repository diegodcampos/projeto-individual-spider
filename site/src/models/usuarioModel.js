var database = require("../database/config")

function fazerLogin(nome, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function fazerLogin(): ", nome, senha)
    var instrucao = `
        SELECT idUsuario, nomeUsuario, senhaUsuario FROM Usuario WHERE nomeUsuario = '${nome}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function fazerCadastro(nome, senha, heroiFavorito) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, senha, heroiFavorito);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO usuario (nomeUsuario, senhaUsuario, heroiFavorito) VALUES ('${nome}', '${senha}', '${heroiFavorito}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function registroOcorrencia(crime, dataCrime, bot, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registroOcorrencia():", crime, dataCrime, bot, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO CadastroCrimes (tituloCrime, dataCrime, spiderBot, statusCrime, fkUsuario) VALUES ('${crime}', '${dataCrime}', '${bot}', '0', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registroSolucao(solucao, ajuda, idCrime) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registroSolucao():", solucao, ajuda, idCrime);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO ResolucaoCrimes (comoResolver, spiderAjuda, fkCrime) VALUES ('${solucao}', '${ajuda}', '${idCrime}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registroIdCrime(crime, dataCrime) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registroIdCrime(): ", crime, dataCrime)
    var instrucao = `
        SELECT idCrime, tituloCrime, dataCrime FROM CadastroCrimes WHERE tituloCrime = '${crime}' AND dataCrime = '${dataCrime}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function updateCrimes() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function updateCrimes(): ")
    var instrucao = `
    update CadastroCrimes set statusCrime = 1
    where statusCrime = 0;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    fazerLogin,
    fazerCadastro,
    registroOcorrencia,
    registroSolucao,
    registroIdCrime,
    updateCrimes
};