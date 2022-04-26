let path =require('path');
const express = require('express');
const rota = express.Router();

rota.get('/',(req,res,next)=>{
	res.render("conteudo");
});

// rota.get('/projetos',(req,res,next)=>{
// 	res.render("PA")
// })

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

rota.get('/estudantes',(req,res,next)=>{
	res.render("estudantes")
})

rota.get('/tcc',(req,res)=>{
	res.render("tcc")
})

rota.get('/cultural',(req,res)=>{
	res.render("00002")
})

rota.get('/edificil',(req,res)=>{
	res.render("00003")
})

rota.get('/hospital',(req,res)=>{
	res.render("00004")
})

rota.get('/loteamento',(req,res)=>{
	res.render("00005")
})

rota.get('/paisagismo',(req,res)=>{
	res.render("00006")
})

rota.get('/interiores',(req,res)=>{
	res.render("00007")
})

rota.get('/washington',(req,res)=>{
	res.render("00008")
})

rota.get('/catalogo',(req,res)=>{
	res.render("00009")
})

rota.get('/estudo_paisagismo',(req,res)=>{
	res.render("00010")
})

rota.get('/permacultura',(req,res)=>{
	res.render("00011")
})

rota.get('/diag_praca',(req,res)=>{
	res.render("00012")
})

rota.get('/diag_urb',(req,res)=>{
	res.render("00013")
})

rota.get('/tcc-luiz',(req,res)=>{
	res.render("00014")
})

module.exports = rota;