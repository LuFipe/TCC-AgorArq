const path =require('path');
const ler = require('../BancoDados/readAll')
const express = require('express');
const rota = express.Router();


rota.get('/',(req,res,next)=>{
	res.redirect('/home');
});
rota.get('/home',async (req,res,next)=>{
	let escritorio = await ler.lerEsc();
	escritorio = JSON.stringify(escritorio)
	escritorio = JSON.parse(escritorio)

	console.log(escritorio);
	console.log(escritorio[0].nome);

	ig = escritorio[0].instagram
	ig = ig.split('@')

	escritorio[0].instagram = ig[1]
	res.render("HOME",{"ESCRITORIO":escritorio[0]});
});

rota.get('/projetos',async(req,res,next)=>{
	//LER DADOS DO ESCRITORIO
	let escritorio = await ler.lerEsc();
	escritorio = JSON.stringify(escritorio)
	escritorio = JSON.parse(escritorio)
	
	console.log("MOSTRANDO OS ESCRITORIOS:\n")
	console.log(escritorio)

	ig = escritorio[0].instagram
	ig = ig.split('@')
	
	escritorio[0].instagram = ig[1]
	
	//LER METADADOS DOS PROJETOS
	let metadados = await ler.lerMetaNat('projeto');
	metadados = JSON.stringify(metadados);
	metadados = JSON.parse(metadados)

	console.log("MOSTRANDO OS METAS:\n")
	console.log(metadados)

	//AJUSTAR DADOS
	for(let i =0; i<metadados.length;i++){
		//LETRAS MAIUSCULAS
		metadados[i]['nome'] = metadados[i]['nome'].toUpperCase();
		
		metaID = metadados[i]['id']
		console.log("O ID do projeto")
		console.log(metaID)
		//LER THUMBNAIL
		let miniatura = await ler.lerThumb(metaID)
		miniatura = JSON.stringify(miniatura);
		miniatura = JSON.parse(miniatura);
		console.log("MOSTRANDO O MINIATURA:\n")
		console.log(miniatura)	
		
		//LER PROJETO
		let projeto = await ler.lerProjID(metaID)
		projeto = JSON.stringify(projeto);
		projeto = JSON.parse(projeto);
		console.log("MOSTRANDO O PROJETO:\n")
		console.log(projeto)	
		
		metadados[i]['nm_img'] = miniatura[0]['nome']
		metadados[i]['ext'] = miniatura[0]['extensao']
		metadados[i]['data_proj'] = projeto[0]['data']
		metadados[i]['escritorio'] = projeto[0]['escritorio']
		metadados[i]['metragem'] = projeto[0]['metragem']
		metadados[i]['local'] = projeto[0]['local']
	}
	
	console.log(metadados)
	res.render("PROJETOS",{"ESCRITORIO":escritorio[0],"CELULA":metadados})
})

rota.get('/artigos',async (req,res,next)=>{
	//LER DADOS DO ESCRITORIO
	let escritorio = await ler.lerEsc();
	escritorio = JSON.stringify(escritorio)
	escritorio = JSON.parse(escritorio)

	console.log(escritorio);
	console.log(escritorio[0].nome);

	ig = escritorio[0].instagram
	ig = ig.split('@')

	escritorio[0].instagram = ig[1]

	//LER METADADOS DOS ARTIGOS
	let metadados = await ler.lerMetaNat('artigo');
	metadados = JSON.stringify(metadados);
	metadados = JSON.parse(metadados)

	//AJUSTAR DADOS
	for(let i =0; i<metadados.length;i++){
		//LETRAS MAIUSCULAS
		metadados[i]['nome'] = metadados[i]['nome'].toUpperCase();
		
		metaID = metadados[i]['id']
		console.log("O ID do artigo")
		console.log(metaID)
		//LER THUMBNAIL
		let miniatura = await ler.lerThumb(metaID)
		miniatura = JSON.stringify(miniatura);
		miniatura = JSON.parse(miniatura);
		console.log("MOSTRANDO O MINIATURA:\n")
		console.log(miniatura)	
		
		//LER ARTIGO
		let artigo = await ler.lerArtID(metaID)
		artigo = JSON.stringify(artigo);
		artigo = JSON.parse(artigo);
		console.log("MOSTRANDO O ARTIGO:\n")
		console.log(artigo)	
		
		metadados[i]['nm_img'] = miniatura[0]['nome']
		metadados[i]['ext'] = miniatura[0]['extensao']
		metadados[i]['data'] = artigo[0]['createdAt']
		metadados[i]['autor'] = artigo[0]['escritor_id']
		metadados[i]['subtipo'] = artigo[0]['subtipo']
	}
	console.log(metadados)

	res.render('ARTIGO',{"ESCRITORIO":escritorio[0],"ARTIGOS":metadados})
})

rota.get('/midias',async (req,res,next)=>{
	//LER DADOS DO ESCRITORIO
	let escritorio = await ler.lerEsc();
	escritorio = JSON.stringify(escritorio)
	escritorio = JSON.parse(escritorio)

	console.log(escritorio);
	console.log(escritorio[0].nome);

	ig = escritorio[0].instagram
	ig = ig.split('@')

	escritorio[0].instagram = ig[1]

	//LER METADADOS DOS MIDIAS
	let metadados = await ler.lerMetaNat('link');
	metadados = JSON.stringify(metadados);
	metadados = JSON.parse(metadados)

	//AJUSTAR DADOS
	for(let i =0; i<metadados.length;i++){
		//LETRAS MAIUSCULAS
		metadados[i]['nome'] = metadados[i]['nome'].toUpperCase();
		
		metaID = metadados[i]['id']
		console.log("O ID do artigo")
		console.log(metaID)
		//LER THUMBNAIL
		let miniatura = await ler.lerThumb(metaID)
		miniatura = JSON.stringify(miniatura);
		miniatura = JSON.parse(miniatura);
		console.log("MOSTRANDO O MINIATURA:\n")
		console.log(miniatura)	
		
		//LER MIDIA
		let midia = await ler.lerLinkID(metaID)
		midia = JSON.stringify(midia);
		midia = JSON.parse(midia);
		console.log("MOSTRANDO O midia:\n")
		console.log(midia)	
		
		metadados[i]['nm_img'] = miniatura[0]['nome']
		metadados[i]['ext'] = miniatura[0]['extensao']
		metadados[i]['data'] = midia[0]['createdAt']
		metadados[i]['site'] = midia[0]['site']
	}
	console.log(metadados)

	res.render('MIDIA',{"ESCRITORIO":escritorio[0],"MIDIAS":metadados})
})

rota.post('/videoTeste',async(req,res,next)=>{
	let ident = req.body.id_NAME;
	console.log(ident)

	let id_meta = await ler.lerMetaOnde(ident)
	id_meta = JSON.stringify(id_meta)
	id_meta = JSON.parse(id_meta)

	let parDesc = id_meta[0]['descricao'].split('\n')
	id_meta[0].paragrafos = parDesc;

	let id_link = await ler.lerLinkOnde(ident)
	id_link = JSON.stringify(id_link)
	id_link = JSON.parse(id_link)

	console.log(id_meta)
	console.log(id_link)
	
	res.render("LINK",{'META':id_meta,'LINK':id_link})

})

rota.get('/servicos',async(req,res,next)=>{
	//LER DADOS DO ESCRITORIO
	let escritorio = await ler.lerEsc();
	escritorio = JSON.stringify(escritorio)
	escritorio = JSON.parse(escritorio)

	console.log(escritorio);
	console.log(escritorio[0].nome);

	ig = escritorio[0].instagram
	ig = ig.split('@')

	escritorio[0].instagram = ig[1]


	//RECUPERANDO INFORMAÇÕES DE SERVIÇOS
	lista_Servico = await ler.lerServ();
	lista_Servico = JSON.stringify(lista_Servico);
	lista_Servico = JSON.parse(lista_Servico);
	for(let i=0;i<lista_Servico.length;i++){
		let pDesc = lista_Servico[i].descricao.split('\n');
		console.log(pDesc)
		lista_Servico[i].pDescricao = pDesc;
	}

	//RECUPERANDO INFORMAÇÕES DAS IMAGENS DE PERFIL
	let lista_Fotos = await ler.lerImgOnde('servico')
	lista_Fotos = JSON.stringify(lista_Fotos);
	lista_Fotos = JSON.parse(lista_Fotos)

	//RELACIONANDO PERFIS A MEMBROS
	//COLOCANDO LETRAS MAIÚSCULAS
	for(let i = 0; i<lista_Servico.length;i++){
		for(let j = 0; j< lista_Fotos.length;j++){
			if(lista_Servico[i].id == lista_Fotos[j].id_ref){
				lista_Servico[i].foto = lista_Fotos[j].nome
				lista_Servico[i].ext = lista_Fotos[j].extensao
				break;
			} else {
				lista_Servico[i].foto = null;
				lista_Servico[i].ext = null
			}
		}
	}

	res.render("SERVICOS",{'SERVICOS':lista_Servico,'ESCRITORIO':escritorio[0]})
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

	console.log(lista_Escritorio);
	
	res.render("sobre",{'ESCRITORIO':lista_Escritorio,'SOB':''})
})

rota.get('/estudantes',async(req,res,next)=>{
	//LER DADOS DO ESCRITORIO
	let escritorio = await ler.lerEsc();
	escritorio = JSON.stringify(escritorio)
	escritorio = JSON.parse(escritorio)

	console.log(escritorio);
	console.log(escritorio[0].nome);

	ig = escritorio[0].instagram
	ig = ig.split('@')

	escritorio[0].instagram = ig[1]

	//RECUPERANDO INFORMAÇÕES DOS MEMBROS
	let lista_Membros = await ler.lerMembros();
	lista_Membros = JSON.stringify(lista_Membros)
	lista_Membros = JSON.parse(lista_Membros)

	//RECUPERANDO INFORMAÇÕES DAS IMAGENS DE PERFIL
	let lista_Fotos = await ler.lerImgOnde('membro')
	lista_Fotos = JSON.stringify(lista_Fotos);
	lista_Fotos = JSON.parse(lista_Fotos)

	//RELACIONANDO PERFIS A MEMBROS
	//COLOCANDO LETRAS MAIÚSCULAS
	for(let i = 0; i<lista_Membros.length;i++){
		lista_Membros[i]['nome'] = lista_Membros[i]['nome'].toUpperCase();
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

	res.render("estudantes",{'MEMBROS':lista_Membros,'ESCRITORIO':escritorio[0]})
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