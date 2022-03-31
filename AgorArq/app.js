//IMPORTAÇÃO DAS BIBLIOTECAS FUNDAMENTAIS//
const express = require('express');
const path = require('path');
const cookieParse = require('cookie-parser');

let app = express();

//SETTANDO A VIEW ENGINE//
app.set('views','/PUG');
app.set('view engine','pug');

//SETTANDO OS ARQUIVOS ESTATICOS COM ROTA MIDIA//
app.use(express.static(path.join(__dirname,"front")));

//CRIAÇÃO DA APLICAÇÃO//
app.get('/',(req,res)=>{
	res.render(path.join(__dirname,"PUG/news"));
});

let server = app.listen(3000,()=>{
	console.log("Listenin in port 3000")
});

app.use((err, req, res, next)=>{
	console.error(err.stack);
	res.status(500).send('I fucked up');
});