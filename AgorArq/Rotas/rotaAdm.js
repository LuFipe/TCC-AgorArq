let path =require('path');
const express = require('express');
const criar = require('../BancoDados/criarDB')

const rota = express.Router();

rota.get('/',(req,res,next)=>{
	res.render("Adm_Home.pug");
});

rota.get('/addMeta',(req,res,next)=>{
	res.render('add_Metadados')
})

rota.post('/addMeta',(req,res,next)=>{
	let ident = req.body.ID;
	let nm = req.body.Nome;
	let tp = req.body.Tipo;
	let dt = req.body.Data;
	let it = req.body.Introducao;
	let desc = req.body.Descricao;
	console.log("\nDados PAssados são:\n\n")
	console.log(ident);
	console.log(nm);
	console.log(tp);
	console.log(dt);
	console.log(it);
	console.log(desc);
	console.log("\nFim dos dados\n\n")
	res.send("Check Console para dados do Meta")
})

rota.get('/addMember',(req,res,next)=>{
	res.render("add_Membros.pug");
});

rota.post('/addMember',(req,res,next)=>{
	let ident = req.body.ID;
	let nm = req.body.Nome;
	let form = req.body.Formacao;
	let cg = req.body.Cargo;

	console.log("\n\n Entrando com o valor do body: \n")
	console.log(ident)
	console.log(nm)
	console.log(form)
	console.log(cg)
	criar.criarMemb(ident, nm, form, cg);
	res.send("Membro adicionado com sucesso")
})

rota.get('/addServ',(req,res,next)=>{
	res.render('add_Servico')
})

rota.post('/addServ',(res,req,next)=>{
	let servico = req.body.servico;
	let descricao = req.body.descricao;
	console.log("servico: ")
	console.log(servico)
	console.log("\nDescricao: ")
	console.log(descricao)
	res.send("Check Console")
})

rota.get('/addEscrit',(req,res,next)=>{
	res.render('add_Escritorio')
})

rota.post('/addEscrit',(req,res,next)=>{
	let sobre = req.body.sobre;
	let valor = req.body.valor;
	let missao = req.body.missao;
	let visao = req.body.visao;
	let tel = req.body.telefone;
	let zapzap = req.body.whatsapp;
	let insta = req.body.instagram;
	let face = req.body.facebook;
	let lkdin = req.body.linkedin;
	let tt = req.body.twitter;
	let tk = req.body.tiktok;
	let email = req.body.email;

	console.log("Mostrando Resultados:\n");
	console.log(sobre);
	console.log(valor);
	console.log(missao);
	console.log(visao);
	console.log(tel);
	console.log(zapzap);
	console.log(insta);
	console.log(face);
	console.log(lkdin);
	console.log(tt);
	console.log(tk);
	console.log(email);
	criar.criarEsc(sobre, valor, missao, visao, tel, zapzap, insta,face,lkdin,tt,tk,email)
	res.send("Escritorio Criado, verificar console e DB")
})

module.exports = rota;