const { mainModule } = require('process');
const db = require('../db');
const tabela = require('../tabelas');

//INSERÇÃO DE DADOS NA TABELA METADADOS
module.exports.criarMeta = async (ident, nm, tp, it, desc)=>{
	try{
	//ETAPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.meta.create(
			{
				id: ident,
				nome: nm,
				tipo: tp,
				intro: it,
				descricao: desc
			}
		)
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

//INSERÇÃO DE DADOS NA TABELA PROJETOS
module.exports.criarProj = async (esc, met, ref, cam)=>{	
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.projetos.create(
			{
				escritorio: esc,
				metragem: met,
				id_ref: ref
			}
		)		
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

//INSERÇÃO DE DADOS NA TABELA Projeto Membros
module.exports.criarProj_Memb = async (ident, ident_memb, ident_proj)=>{
	try{
	//ETAPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.proj_memb.create(
			{
				id:ident,
				id_memb:ident_memb,
				id_proj:ident_proj
			}
		)
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n")}
}

//INSERÇÃO DE DADOS NA TABELA ARTIGO
module.exports.criarArt = async (ident, subj, subt, aut)=>{	
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.artigos.create(
			{
				id: ident,
				assunto: subj,
				subtipo: subt,
				escritor_id: aut
			}
		)		
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

//INSERÇÃO DE DADOS NA TABELA LINKS
module.exports.criarLink = async (yt, skf, pz, arq, idr)=>{	
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.links.create(
			{
				youtube: yt,
				sketchfab: skf,
				prezi: pz,
				arquivo: arq,
				id_ref: idr
			}
		)		
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

//INSERÇÃO DE DADOS NA TABELA MEMBROS
module.exports.criarMemb = async (ident, nm, form, cg)=>{	
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.membros.create(
			{
				id: ident,
				nome: nm,
				formacao: form,
				cargo: cg
			}
		)		
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

//INSERÇÃO DE DADOS NA TABELA IMAGENS
module.exports.criarImg = async (nm, nat, ext,tmb, ref)=>{	
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
	console.log("entrou na criação da imagem")
		const sinc = await db.sync();
		console.log(sinc);
	console.log("sincronizado")
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.imagens.create(
			{
				nome: nm,
				natureza: nat,
				extensao: ext,
				thumb: tmb,
				id_ref: ref
			}
		)
		console.log("Criado e salvo")
		
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

//INSERÇÃO DE DADOS NA TABELA SERVIÇOS
module.exports.criarServ = async (ident, sv, intro, desc)=>{	
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.servicos.create(
			{
				id: ident,
				servico: sv,
				introducao: intro,
				descricao: desc
			}
		)		
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

//INSERÇÃO DE DADOS NA TABELA ESCRITÓRIO
module.exports.criarEsc = async (sb, vl, mis, vis, tel, wp, insta, fb, lkdin, tt, tk, mail )=>{
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.escritorio.create(
			{
				sobre: sb,
				valor: vl,
				missao: mis,
				visao: vis,
				telefone: tel,
				whatsapp: wp,
				instagram: insta,
				facebook: fb,
				linkedin: lkdin,
				twitter: tt,
				tiktok: tk,
				email: mail,
			}
		)		
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

