var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selectCrimes(idUsuario) {

    instrucaoSql = `select 
    count(idCrime) as qtdCrimes,
    sum(statusCrime = 0) as crimesAbertos,
    sum(statusCrime = 1) as crimesFechados
    from CadastroCrimes 
    where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selectAjudas(idUsuario) {

    instrucaoSql = `select 
    sum(spiderBot = 1) + sum(spiderAjuda = 1) as totalAjudas,
    sum(spiderBot = 1) as ajudaBot,
    sum(spiderAjuda = 1) as ajudaSpider
    from CadastroCrimes
    join ResolucaoCrimes ON idCrime = fkCrime
    where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selectTitulos(idUsuario) {

    instrucaoSql = `select tituloCrime as listaCrimes 
    from CadastroCrimes
    where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    selectCrimes,
    selectAjudas,
    selectTitulos
}
