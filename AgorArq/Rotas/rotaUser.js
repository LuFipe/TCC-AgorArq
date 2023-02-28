const path =require('path');
const ler = require('../BancoDados/readAll')
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

rota.get('/servicos',async(req,res,next)=>{
	
	//RECUPERANDO INFORMAÇÕES DO ESCRITORIO
	let lista_Escritorio = await ler.lerEsc();
	lista_Escritorio = JSON.stringify(lista_Escritorio)
	lista_Escritorio = JSON.parse(lista_Escritorio)
	for(let i=0;i<lista_Escritorio.length;i++){
		let pSobre = lista_Escritorio[i].sobre.split('\n');
		let pValor = lista_Escritorio[i].valor.split('\n');
		let pMissao = lista_Escritorio[i].missao.split('\n');
		let pVisao = lista_Escritorio[i].visao.split('\n');
		lista_Escritorio[i].parSobre = pSobre;
		lista_Escritorio[i].parValor = pValor;
		lista_Escritorio[i].parMissao = pMissao;
		lista_Escritorio[i].parVisao = pVisao;
	}

	//RECUPERANDO INFORMAÇÕES DE SERVIÇOS
	lista_Servico = await ler.lerServ();
	lista_Servico = JSON.stringify(lista_Servico);
	lista_Servico = JSON.parse(lista_Servico);
	for(let i=0;i<lista_Servico.length;i++){
		let pDesc = lista_Servico[i].descricao.split('\n');
		console.log(pDesc)
		lista_Servico[i].pDescricao = pDesc;
	}

	res.render("servicos",{'ESCRITORIO':lista_Escritorio,'SERVICOS':lista_Servico})
})

rota.get('/bd',(req,res,next)=>{
	res.render("bd")
})

rota.get('/sobre',async(req,res,next)=>{

	//RECUPERANDO INFORMAÇÕES DO ESCRITORIO
	let lista_Escritorio = await ler.lerEsc();
	lista_Escritorio = JSON.stringify(lista_Escritorio)
	lista_Escritorio = JSON.parse(lista_Escritorio)
	for(let i=0;i<lista_Escritorio.length;i++){
		let pSobre = lista_Escritorio[i].sobre.split('\n');
		let pValor = lista_Escritorio[i].valor.split('\n');
		let pMissao = lista_Escritorio[i].missao.split('\n');
		let pVisao = lista_Escritorio[i].visao.split('\n');
		lista_Escritorio[i].parSobre = pSobre;
		lista_Escritorio[i].parValor = pValor;
		lista_Escritorio[i].parMissao = pMissao;
		lista_Escritorio[i].parVisao = pVisao;
	}

	res.render("sobre",{'ESCRITORIO':lista_Escritorio})
})

rota.get('/estudantes',async(req,res,next)=>{

	//RECUPERANDO INFORMAÇÕES DOS MEMBROS
	let lista_Membros = await ler.lerMembros();
	lista_Membros = JSON.stringify(lista_Membros)
	lista_Membros = JSON.parse(lista_Membros)

	//RECUPERANDO INFORMAÇÕES DAS IMAGENS DE PERFIL
	let lista_Fotos = await ler.lerImgOnde('membro')
	lista_Fotos = JSON.stringify(lista_Fotos);
	lista_Fotos = JSON.parse(lista_Fotos)

	//RELACIONANDO PERFIS A MEMBROS
	for(let i = 0; i<lista_Membros.length;i++){
		for(let j = 0; j< lista_Fotos.length;j++){
			if(lista_Membros[i].id == lista_Fotos[j].id_ref){
				lista_Membros[i].foto = lista_Fotos[j].nome
				lista_Membros[i].ext = lista_Fotos[j].extensao
				break;
			} else {
				lista_Membros[i].foto = null;
				lista_Membros[i].ext = null
			}
		}
	}

	res.render("estudantes",{'MEMBROS':lista_Membros})
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