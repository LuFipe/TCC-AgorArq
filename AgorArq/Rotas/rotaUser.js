let path =require('path');
const express = require('express');
const rota = express.Router();

rota.get('/',(req,res,next)=>{
	res.render("blog");
});

rota.get('/projetos',(req,res,next)=>{
	res.render("projetos")
})

rota.get('/escritorio',(req,res,next)=>{
	res.render("escritorio")
})

rota.get('/bd',(req,res,next)=>{
	res.render("bd")
})

rota.get('/sobre',(req,res,next)=>{
	res.render("sobre")
})

module.exports = rota;