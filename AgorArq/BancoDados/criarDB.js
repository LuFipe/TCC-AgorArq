const { mainModule } = require('process');
const db = require('./db');
const tabela = require('./tabelas');

module.exports.criarMeta = async (ident, nm, tp, dt, it, desc, cam)=>{

	try{
		const sinc = await db.sync();
		console.log(sinc);

		const inserir = tabela.meta.create({
			id: ident,
			nome: nm,
			tipo: tp,
			data: dt,
			intro: it,
			descricao: desc,
			caminho: cam

		})

	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

module.exports.criarProj = async (esc, met, ref)=>{

	try{
		const sinc = await db.sync();
		console.log(sinc);

		const inserir = tabela.projetos.create({
			escritorio: esc,
			metragem: met,
			id_ref: ref
		})

	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

module.exports.criarArt = async (subj, subt)=>{

	try{
		const sinc = await db.sync();
		console.log(sinc);

		const inserir = tabela.projetos.create({
			assunto: subj,
			subtipo: subt
		})

	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

module.exports.criarMemb = async (ident, nm, form, cg)=>{

	try{
		const sinc = await db.sync();
		console.log(sinc);

		const inserir = tabela.projetos.create({
			id: ident,
			nome: nm,
			formacao: form,
			cargo: cg
		})

	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

module.exports.criarImg = async (nm)=>{

	try{
		const sinc = await db.sync();
		console.log(sinc);

		const inserir = tabela.projetos.create({
			nome: nm
		})

	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

module.exports.criarMemb = async (yt, skf, pz, arq)=>{

	try{
		const sinc = await db.sync();
		console.log(sinc);

		const inserir = tabela.projetos.create({
			youtube: yt,
			sketchfab: skf,
			prezi: pz,
			arquivo: arq
		})

	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

module.exports.criarServ = async (sv, desc, tmb)=>{

	try{
		const sinc = await db.sync();
		console.log(sinc);

		const inserir = tabela.projetos.create({
			servico: sv,
			descricao: desc,
			thumbnail: tmb
		})

	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};

module.exports.criarEsc = async (sb, tel, insta, fb, lkdin, tt, tk, mail )=>{

	try{
		const sinc = await db.sync();
		console.log(sinc);

		const inserir = tabela.projetos.create({
			sobre: sb,
			telefone: tel,
			whatsapp: form,
			instagram: insta,
			facebook: fb,
			linkedin: lkdin,
			twitter: tt,
			tiktok: tk,
			email: mail,

		})

	} catch(error) {console.log("\n\nOcorreu um erro na insercao dos dados no banco de dados: "+error+"\n\n");}
};