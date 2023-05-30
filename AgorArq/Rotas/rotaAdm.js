const path =require('path');
const express = require('express');
const criar = require('../BancoDados/criarDB')
const ler = require('../BancoDados/readAll')
const atualizar = require('../BancoDados/updateDB')
const deletar = require('../BancoDados/deleteDB')
const multer = require('multer')

let img_path = path.join(__dirname,"../front/imagens")
const rota = express.Router();

//DEFINIÇÕE DO MULTER
//STORAGES
const storageImagem = multer.diskStorage({
	destination: (req,file, cb)=>{
		cb(null, path.join(__dirname,"../front/imagens"))
	},
	filename: (req,file,cb)=>{
		let nm = req.body.ID+"_"+req.body.SUBNOME;
		let nome_comp = file.originalname;
		let nome = nome_comp.split('.');

		cb(null,nm+"."+nome[nome.length-1])
	}
})

const storageIcone = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,path.join(__dirname,"../front/icones"))
	},
	filename:(req,file,cb)=>{
		let nm = req.body.NOME;
		let nome_comp = file.originalname;
		let nome = nome_comp.split('.');

		cb(null,nm+"."+nome[nome.length-1])
	},
})

//MODULO DE UPLOAD
const uploadImagem = multer({storage: storageImagem})
const uploadIcone = multer({storage: storageIcone})


//HOME PAGE
rota.get('/',(req,res,next)=>{
	res.render("Adm_Home.pug");
});

//ROTAS PARA ADICÃO NA TABELA
rota.get('/addMeta',(req,res,next)=>{
	res.render('add_Metadados')
})

rota.post('/addMeta',(req,res,next)=>{
	let ident = req.body.ID;
	let nm = req.body.Nome;
	let tp = req.body.Tipo;
	let it = req.body.Introducao;
	let desc = req.body.Descricao;
	console.log("\nOs valores passados pelo metadado são:")
	console.log(ident)
	console.log(nm)
	console.log(tp)
	console.log(it)
	console.log(desc)

	criar.criarMeta(ident,nm,tp,it,desc)
	switch(tp){
		case "projeto":
			let esc = req.body.escritorio;
			let met = req.body.metragem;
			break;
		case "artigo":
			let assunto = req.body.assunto;
			let subtipo = req.body.subtipo;
			break;
		case "link":
			let site = req.body.Link;
			let urlSite = req.body.Hiperlink;
			console.log("\nEntrou nos dados de link. Os dados passados foram: ")
			console.log(site)
			console.log(urlSite)
			switch(site){
				case "youtube":
					criar.criarLink(urlSite,null,null,null,ident)
					break;
				case "sketchfab":
					criar.criarLink(null,urlSite,null,null,ident)
					break;
				case "prezi":
					criar.criarLink(null,null,urlSite,null,ident)
					break;
			}
			break;
	}

	res.send("Check Console para dados do Meta")
})

rota.post('/addPROJETOS',uploadImagem.single('THUMBNAIL'),(req,res,next)=>{
	let data_cria = req.body.DATA;
	let loc = req.body.LOCAL;
	let escri = req.body.ESCRITORIO;
	let metra = req.body.METRAGEM;
	let titul = req.body.TITULO;
	let intro = req.body.INTRODUCAO;
	let descr = req.body.DESCRICAO;
	let id = req.body.ID;
	let subnm = req.body.SUBNOME;
	let natur = req.body.NATUREZA;

	let nome_comp = req.file.originalname;
	let nome = nome_comp.split('.');
	let extens = nome[nome.length-1]
	
	console
	criar.criarMeta(id,titul, natur, intro, descr);
	criar.criarProj(data_cria,loc, escri,metra, id)
	criar.criarImg(id+"_"+subnm,natur,extens,true,id)
	res.redirect('/adm');
})

rota.post('/addARTIGOS',uploadImagem.single('THUMBNAIL'),(req,res,next)=>{
	let tipo  = req.body.TIPO_ARTIGO;
	let assun = req.body.ASSUNTO;
	let titul = req.body.TITULO;
	let intro = req.body.INTRODUCAO;
	let descr = req.body.DESCRICAO;
	let id = req.body.ID;
	let autor = req.body.ID_AUTOR;
	let subnm = req.body.SUBNOME;
	let natur = req.body.NATUREZA;

	let img_nm = id+"_"+subnm;
	let nome_comp = req.file.originalname;
	let nome = nome_comp.split('.');
	let extens = nome[nome.length-1]
	
	console
	criar.criarMeta(id,titul, natur, intro, descr);
	criar.criarArt(id,assun,tipo,autor)
	criar.criarImg(img_nm,natur,extens,true,id)
	res.redirect('/adm');
})

rota.post('/addLINKS',uploadImagem.single('THUMBNAIL'),(req,res,next)=>{
	let site  = req.body.SITE;
	let link  = req.body.LINK;
	let titul = req.body.TITULO;
	let intro = req.body.INTRODUCAO;
	let descr = req.body.DESCRICAO;
	let id = req.body.ID;
	let subnm = req.body.SUBNOME;
	let natur = req.body.NATUREZA;

	let img_nm = id+"_"+subnm;
	let nome_comp = req.file.originalname;
	let nome = nome_comp.split('.');
	let extens = nome[nome.length-1]
	
	console
	criar.criarMeta(id,titul, natur, intro, descr);
	criar.criarLink(site,link, id)
	criar.criarImg(img_nm,natur,extens,true,id)
	res.redirect('/adm');
})

rota.post('/addMEMBROS',uploadImagem.single('THUMBNAIL'),(req,res,next)=>{
	let cargo = req.body.CARGO;
	let forma = req.body.FORMACAO;
	let name  = req.body.TITULO;
	let intro = req.body.INTRODUCAO;
	let descr = req.body.DESCRICAO;
	let id = req.body.ID;
	let subnm = req.body.SUBNOME;
	let natur = req.body.NATUREZA;

	let img_nm = id+"_"+subnm;
	let nome_comp = req.file.originalname;
	let nome = nome_comp.split('.');
	let extens = nome[nome.length-1]
	
	console
	criar.criarMeta(id,name, natur, intro, descr);
	criar.criarMemb(id, name,forma,cargo)
	criar.criarImg(img_nm,natur,extens,true,id)
	res.redirect('/adm');
})

rota.post('/addESCRITparceiro',uploadImagem.single("logo"),(req,res,next)=>{
	let sobre = req.body.sobre;
	let valor = req.body.valor;
	let missao = req.body.missao;
	let visao = req.body.visao;
	let nm = req.body.nome;
	let id = req.body.ID;
	let subnm = req.body.SUBNOME;
	let zapzap = req.body.whatsapp;
	let insta = req.body.instagram;
	let face = req.body.facebook;
	let lkdin = req.body.linkedin;
	let tt = req.body.twitter;
	let tk = req.body.tiktok;
	let email = req.body.email;
	let end = req.body.endereco;
	let prop = false;

	let img_nm = id+"_"+subnm;
	let nome_comp = req.file.originalname;
	let nome = nome_comp.split('.');
	let extens = nome[nome.length-1]

	console.log("Mostrando Resultados:\n");
	console.log(sobre);
	console.log(valor);
	console.log(missao);
	console.log(visao);
	console.log(nm);
	console.log(zapzap);
	console.log(insta);
	console.log(face);
	console.log(lkdin);
	console.log(tt);
	console.log(tk);
	console.log(email);
	criar.criarImg(img_nm,"logo",extens,true,id)
	criar.criarEsc(id,sobre, valor, missao, visao, nm, zapzap, insta,face,lkdin,tt,tk,email,end,prop)
	res.redirect("/")
})

rota.post('/addESCRITproprio',uploadIcone.single("logo"),(req,res,next)=>{
	let sobre = req.body.sobre;
	let valor = req.body.valor;
	let missao = req.body.missao;
	let visao = req.body.visao;
	let nm = req.body.nome;
	let id = req.body.ID;
	let zapzap = req.body.whatsapp;
	let insta = req.body.instagram;
	let face = req.body.facebook;
	let lkdin = req.body.linkedin;
	let tt = req.body.twitter;
	let tk = req.body.tiktok;
	let email = req.body.email;
	let end = req.body.endereco;
	let prop = true;

	console.log("Mostrando Resultados:\n");
	console.log(sobre);
	console.log(valor);
	console.log(missao);
	console.log(visao);
	console.log(nm);
	console.log(zapzap);
	console.log(insta);
	console.log(face);
	console.log(lkdin);
	console.log(tt);
	console.log(tk);
	console.log(email);
	criar.criarEsc(id,sobre, valor, missao, visao, nm, zapzap, insta,face,lkdin,tt,tk,email,end,prop)
	res.redirect("/")
})

rota.post('/addSERV',uploadIcone.single('THUMBNAIL'),(req,res,next)=>{
	let servico = req.body.servico;
	let introducao = req.body.intro;
	let descricao = req.body.descricao;
	let id = req.body.ID;
	let subnm = req.body.SUBNOME;
	console.log("servico: ")
	console.log(servico)
	console.log("\nintroducao: ")
	console.log(introducao)
	console.log("\nDescricao: ")
	console.log(descricao)

	let img_nm = id+"_"+subnm;
	let natur = req.body.NATUREZA;
	let nome_comp = req.file.originalname;
	let nome = nome_comp.split('.');
	let extens = nome[nome.length-1]

	criar.criarServ(id,servico, introducao, descricao)
	criar.criarImg(img_nm,natur,extens,true,id)
	res.redirect("/")
})

rota.post('/addICONE',uploadIcone.single('ICONE'),(req,res,next)=>{
	console.log("conseguimos postar")
	res.redirect("/")
});

//ROTAS DE LEITURAS
rota.get('/RUDMember', async (req,res,next)=>{
	//AS FUNÇÕES PARA LER O BANCO DE DADOS SÃO ASSINCRONAS,
	//PORTANTO PRECISAMOS ESPERAR (await) A RESPOSTA DE TAIS FUNÇÕES PARA CONTINUAR.
	//PARA ESPERAR, PRECISAMOS ESTAR DENTRO DE NUMA FUNÇÃO ASSINCRONA ('async()=>{}')
	let lista_Membros = await ler.lerMembros();
	let lista_Fotos = await ler.lerImgOnde('membro')
	
	//O OBJETO RETORNADO PELO SEQUELIZE NÃO É UM JSON TRADICIONAL (object SequelizeInstance)
	//PRECISAMOS TRSANSFORMAR NUM JSON TRADICONAL (object Object) COM OS COMANDOS:
	//JSON.stringfy(object) & JSON.parse(object)
	lista_Membros = JSON.stringify(lista_Membros)
	lista_Membros = JSON.parse(lista_Membros)
	
	lista_Fotos = JSON.stringify(lista_Fotos);
	lista_Fotos = JSON.parse(lista_Fotos)
	
	//ITERAÇÃO PARA ADICIONAR A FOTO AO MEMBRO
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
	res.render("RUD_Member",{'MEMBROS':lista_Membros})
});

rota.get('/RUDServ', async(req,res,next)=>{
	lista_Servico = await ler.lerServ();
	lista_Servico = JSON.stringify(lista_Servico);
	lista_Servico = JSON.parse(lista_Servico);
	
	//AS DESCRIÇÕES POSSUEM PARAGRAFOS QUE NÃO SÃO RECONHECIDOS PELO FRONT
	//É CRIADO UM ELMENTO VIRTUAL (pDescricao) DENTRO DO JSON QUE SEPARA CADA UM DOS PARAGRAFOS
	for(let i=0;i<lista_Servico.length;i++){
		let pDesc = lista_Servico[i].descricao.split('\n');
		console.log(pDesc)
		lista_Servico[i].pDescricao = pDesc;
	}

	console.log('\n\nMostrando Objeto passado para o cliente:\n')
	console.log(lista_Servico)
	res.render("RUD_Servico",{'SERVICO':lista_Servico})

});

rota.get('/RUDEsc',async(req,res,next)=>{
	let lista_Escritorio = await ler.lerEsc()
	lista_Escritorio = JSON.stringify(lista_Escritorio)
	lista_Escritorio = JSON.parse(lista_Escritorio)

	//AS DESCRIÇÕES POSSUEM PARAGRAFOS QUE NÃO SÃO RECONHECIDOS PELO FRONT
	//É CRIADO UM ELMENTO VIRTUAL (pDescricao) DENTRO DO JSON QUE SEPARA CADA UM DOS PARAGRAFOS
	for(let i=0;i<lista_Escritorio.length;i++){
		let pSobre = lista_Escritorio[i].sobre.split('\n');
		let pValor = lista_Escritorio[i].valor.split('\n');
		let pMissao = lista_Escritorio[i].missao.split('\n');
		let pVisao = lista_Escritorio[i].visao.split('\n');
		console.log(pSobre)
		console.log(pValor)
		console.log(pMissao)
		console.log(pVisao)
		lista_Escritorio[i].parSobre = pSobre;
		lista_Escritorio[i].parValor = pValor;
		lista_Escritorio[i].parMissao = pMissao;
		lista_Escritorio[i].parVisao = pVisao;
	}

	res.render('RUD_Escritorio',{'ESCRITORIO':lista_Escritorio})
})

//ROTAS DE ATUALIZAÇÃO
rota.post('/atualizarMembro',async(req,res,next)=>{
	id = req.body.id_memb_atualizar;
	form = req.body.formacao;
	cargo = req.body.cargo;
	const up = await atualizar.atualizarMembro(id,form,cargo)

	//RETORNAR PARA A PAGINA DE LEITURA, MAS ATUALIZADA
	lista_Membros = await ler.lerMembros();
	lista_Membros = JSON.stringify(lista_Membros)
	lista_Membros = JSON.parse(lista_Membros)
	res.render("RUD_Member",{'MEMBROS':lista_Membros})
})

rota.post('/atualizarServico',async(req,res,next)=>{
	id = req.body.id_serv_atualizar;
	serv = req.body.servico;
	intro = req.body.introducao;
	desc = req.body.descricao;
	const up = await atualizar.atualizarServ(id, serv, intro, desc)
	console.log("Mostrando se há quebra de linhas: \n");
	console.log(desc);

	//RETORNAR PARA A PAGINA DE LEITURA, MAS ATUALIZADA
	lista_Servico = await ler.lerServ();
	lista_Servico = JSON.stringify(lista_Servico);
	lista_Servico = JSON.parse(lista_Servico);

	for(let i=0;i<lista_Servico.length;i++){
		let pDesc = lista_Servico[i].descricao.split('\n');
		console.log(pDesc)
		lista_Servico[i].pDescricao = pDesc;
	}

	console.log('\n\nMostrando Objeto passado para o cliente:\n')
	console.log(lista_Servico)
	res.render("RUD_Servico",{'SERVICO':lista_Servico})
})

//ROTAS PARA DELETAR
rota.post('/deletarMembro',async(req,res,next)=>{
	id = req.body.id_memb_deletar;
	const deletado = await deletar.deleteMemb(id);
	console.log("ID do membro deletado: ")
	console.log(id);

	//RETORNAR PARA A PAGINA DE LEITURA, MAS ATUALIZADA
	lista_Membros = await ler.lerMembros();
	lista_Membros = JSON.stringify(lista_Membros);
	lista_Membros = JSON.parse(lista_Membros);
	res.render("read_Member",{'MEMBROS':lista_Membros});

});

rota.post('/deletarServico',async(req,res,next)=>{
	id = req.body.id_serv_deletar;
	const deletado = await deletar.deleteServ(id);

	//RETORNAR PARA A PAGINA DE LEITURA, MAS ATUALIZADA
	lista_Servico = await ler.lerServ();
	lista_Servico = JSON.stringify(lista_Servico);
	lista_Servico = JSON.parse(lista_Servico);
	
	for(let i=0;i<lista_Servico.length;i++){
		let pDesc = lista_Servico[i].descricao.split('\n');
		console.log(pDesc)
		lista_Servico[i].pDescricao = pDesc;
	}

	console.log('\n\nMostrando Objeto passado para o cliente:\n')
	console.log(lista_Servico)
	res.render("RUD_Servico",{'SERVICO':lista_Servico})
})
module.exports = rota;