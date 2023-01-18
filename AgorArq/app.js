//IMPORTAÇÃO DAS BIBLIOTECAS FUNDAMENTAIS//
const express = require('express');
const path = require('path');
const cookieParse = require('cookie-parser');
let rotaU = require("./Rotas/rotaUser");
let rotaA = require("./Rotas/rotaAdm");

let app = express();

//SETTANDO A VIEW ENGINE//
app.set('views',path.join(__dirname,"PUG"));
app.set('view engine','pug');

//SETTANDO OS ARQUIVOS ESTATICOS COM ROTA MIDIA//
app.use(express.static(path.join(__dirname,"front")));

//MIDDLEWARES PARA POPULAR O req.body// (passar arquivos do cliente para servido)
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//CRIAÇÃO DA APLICAÇÃO//
app.use('/',rotaU);
app.use('/adm',rotaA);

let server = app.listen(3000,()=>{
	console.log("Listenin in port 3000")
});

app.use((err, req, res, next)=>{
	console.error(err.stack);
	res.status(500).send('I fucked up');
});