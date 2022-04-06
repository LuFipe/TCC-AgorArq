let path =require('path');
const express = require('express');
const rota = express.Router();

rota.get('/',(req,res,next)=>{
	res.render("conteudo");
});

rota.get('/projetos',(req,res,next)=>{
	res.render("PA")
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

rota.get('/estudantes',(req,res,next)=>{
	res.render("estudantes")
})

rota.get('/tcc',(req,res)=>{
	res.render("tcc")
})

module.exports = rota;