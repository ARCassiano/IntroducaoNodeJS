//Aula 1
console.log("Introdução ao Node.js");


//Aula 2
var nome = "Anderson";

function exibirNome(nome){
    console.log(nome);
}

exibirNome(nome);

//Aula 3
var clc = require("cli-color");

console.log(clc.green("Mensagem Verde"));
console.log(clc.red.bgWhite.underline("Underlined red text on white background."));

//Aula 4
var funcoes = require("./funcoes.js");

var resultado = funcoes.validar("Anderson", "1234");

console.log(resultado);

//Aula 5
var http = require("http");

http.createServer(function(request, response){
    response.write("Primeiros passos com node Node.js");
    response.end();
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");

var fs = require("fs");

http.createServer(function(request, response){
    fs.readFile("index.html", function(erro, conteudo){
        if(erro)
            console.log(erro);
        else
            response.write(conteudo);

        response.end();
    });
}).listen(8082);

console.log("Servidor rodando em http://localhost:8082");