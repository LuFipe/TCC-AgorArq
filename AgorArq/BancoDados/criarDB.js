const { mainModule } = require('process');
const db = require('../db');
const tabela = require('../tabelas');

//INSERÇÃO DE DADOS NA TABELA METADADOS
module.exports.criarMeta = async (ident, nm, tp, dt, it, desc)=>{
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
				data: dt,
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
				id_ref: ref,
				caminho: cam
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
module.exports.criarArt = async (subj, subt, cam)=>{	
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.artigos.create(
			{
				assunto: subj,
				subtipo: subt,
				caminho: cam
			}
		)		
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

//INSERÇÃO DE DADOS NA TABELA LINKS
module.exports.criarLink = async (yt, skf, pz, arq)=>{	
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
				arquivo: arq
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
module.exports.criarImg = async (nm)=>{	
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.imagens.create({nome: nm})
		
	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

//INSERÇÃO DE DADOS NA TABELA SERVIÇOS
module.exports.criarServ = async (sv, intro, desc)=>{	
	try{
	//ETPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//ADICIONANDO DADOS NO DB
		const inserir = tabela.servicos.create(
			{
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

