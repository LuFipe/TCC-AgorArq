let path =require('path');
const express = require('express');
const rota = express.Router();

rota.get('/',(req,res,next)=>{
	res.send("ADM Aqui");
});

module.exports = rota;