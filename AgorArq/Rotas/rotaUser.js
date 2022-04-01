let path =require('path');
const express = require('express');
const rota = express.Router();

rota.get('/',(req,res,next)=>{
	res.render("blog");
});

rota.get('/projetos',(req,res,next)=>{
	res.render("projetos")
})

module.exports = rota;