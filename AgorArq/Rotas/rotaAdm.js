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
const storageImagem = multer.diskStorage({
	destination: (req,file, cb)=>{
		cb(null, path.join(__dirname,"../front/imagens"))
	},
	filename: (req,file,cb)=>{
		let nm = req.body.image_name;
		let nome_comp = file.originalname;
		let nome = nome_comp.split('.');

		cb(null,nm+"."+nome[nome.length-1])
	}
})
const uploadImagem = multer({storage: storageImagem})

const storgeArquivo = multer.diskStorage({
	destination: (req,file,cb)=>{
		cb(null, path.join(__dirname,"../front/imagens"))
	}
})

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

rota.post('/addServ',(req,res,next)=>{
	let servico = req.body.servico;
	let introducao = req.body.intro;
	let descricao = req.body.descricao;
	console.log("servico: ")
	console.log(servico)
	console.log("\nintroducao: ")
	console.log(introducao)
	console.log("\nDescricao: ")
	console.log(descricao)

	criar.criarServ(servico, introducao, descricao)
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

rota.get('/addImagem',async(req,res,next)=>{
	let id_membros = await ler.lerMembros()
	id_membros = JSON.stringify(id_membros);
	id_membros = JSON.parse(id_membros)
	
	let id_serv = await ler.lerServ()
	id_serv = JSON.stringify(id_serv)
	id_serv = JSON.parse(id_serv)
	res.render('add_Imagem',{'ID_MEMB':id_membros,'ID_SERV':id_serv})
})

rota.post('/addImagem',uploadImagem.single('imagem_file'), (req,res,next)=>{
	//QUANDO ENTRANDO COM OS DADOS PELO FORMS
	//É NECESSÁRIO QUE OS ARQUIVOS SEJAM COLOCADOS APÓS TODOS OS TEXTOS
	//NO HTML
	let nm = req.body.image_name;
	let nat = req.body.nat_imagem;
	let ref = req.body.id_memb_ref;

	let nome_comp = req.file.originalname;
	let nome = nome_comp.split('.');
	let extens = nome[nome.length-1]
	
	criar.criarImg(nm,nat,extens,ref)
	res.send("Check o console")
})

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