let path =require('path');
const express = require('express');
const rota = express.Router();

rota.get('/',(req,res)=>{
	res.render(path.join(__dirname,"PUG/blog.pug"));
})

rota.get('/projetos',(req,res)=>{
	res.render("projetos");
})

module.exports = rota;