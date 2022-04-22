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

rota.get('/paisagismo',(req,res)=>{
	res.render("paisagismo")
})

rota.get('/cultural',(req,res)=>{
	res.render("cultural")
})

rota.get('/edificil',(req,res)=>{
	res.render("edificil")
})

rota.get('/hospital',(req,res)=>{
	res.render("hospital")
})

rota.get('/loteamento',(req,res)=>{
	res.render("loteamento")
})

rota.get('/catalogo',(req,res)=>{
	res.render("catalogo")
})

rota.get('/washington',(req,res)=>{
	res.render("washington")
})

rota.get('/permacultura',(req,res)=>{
	res.render("permacultura")
})

rota.get('/estudo_paisagismo',(req,res)=>{
	res.render("estudo_paisagismo")
})

rota.get('/diag_praca',(req,res)=>{
	res.render("diag_praca")
})

rota.get('/diag_urb',(req,res)=>{
	res.render("diag_urb")
})

module.exports = rota;