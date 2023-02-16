const db = require('../db')
const tabelas = require('../tabelas')

module.exports.atualizarMeta = async (primary, nm, tp, it, desc)=>{
	try{
		console.log("entrou no programa")
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log("sincronizado")
		//INICIALIZAÇÃO DA TABELA A SER ATUALIZADA
		const MetaDado = await tabelas.meta.findByPk(primary);
		MetaDado.nome = nm;
		MetaDado.tipo = tp;
		MetaDado.intro = it;
		MetaDado.descricao = desc;
		console.log("atualizado")
		//SALVANDO OS NOVOS DADOS
		const salvar = await MetaDado.save();

		console.log("Salvo os dados do id: "+primary)
	} catch(error){
		console.log("Houve um erro: "+error)
	}
}

module.exports.atualizarProj = async(primary, met,ref)=>{
		try{
		console.log("entrou no programa")
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log("sincronizado")
		//INICIALIZAÇÃO DA TABELA A SER ATUALIZADA
		const Projeto = await tabelas.projetos.findByPk(primary);
		Projeto.metragem = met;
		Projeto.id_ref = ref;
		console.log("atualizado")
		//SALVANDO OS NOVOS DADOS
		const salvar = await Projeto.save();

		console.log("Salvo os dados do id: "+primary)
	} catch(error){
		console.log("Houve um erro: "+error)
	}
}

module.exports.atualizarProj_Memb = async (primary, ident_memb, ident_proj)=>{
	try{
		console.log("entrou no programa")
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log("sincronizado")
		//INICIALIZAÇÃO DA TABELA A SER ATUALIZADA
		const Membros_Proj = await tabelas.proj_memb.findByPk(primary);
		Membros_Proj.id_memb = ident_memb;
		Membros_Proj.id_proj = ident_proj;
		console.log("atualizado")
		//SALVANDO OS NOVOS DADOS
		const salvar = await Membros_Proj.save();

		console.log("Salvo os dados do id: "+primary)
	} catch(error){
		console.log("Houve um erro: "+error)
	}
}

module.exports.atualizarArt = async (primary, subj, subt)=>{
	try{
		console.log("entrou no programa")
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log("sincronizado")
		//INICIALIZAÇÃO DA TABELA A SER ATUALIZADA
		const Artigo = await tabelas.artigos.findByPk(primary);
		Artigo.assunto = subj;
		Artigo.subtipo = subt;
		console.log("atualizado")
		//SALVANDO OS NOVOS DADOS
		const salvar = await Artigo.save();

		console.log("Salvo os dados do id: "+primary)
	} catch(error){
		console.log("Houve um erro: "+error)
	}
}

module.exports.atualizarLinks = async (primary, yt, skf, pz, arq)=>{
	try{
		console.log("entrou no programa")
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log("sincronizado")
		//INICIALIZAÇÃO DA TABELA A SER ATUALIZADA
		const Link = await tabelas.links.findByPk(primary);
		Link.youtube = yt;
		Link.sketchfab = skf;
		Link.prezi = pz;
		Link.arquivo = arq;
		console.log("atualizado")
		//SALVANDO OS NOVOS DADOS
		const salvar = await Link.save();

		console.log("Salvo os dados do id: "+primary)
	} catch(error){
		console.log("Houve um erro: "+error)
	}
}

module.exports.atualizarMembro = async (primary, form, cg)=>{
	try{
		console.log("entrou no programa")
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log("sincronizado")
		//INICIALIZAÇÃO DA TABELA A SER ATUALIZADA
		const Membro = await tabelas.membros.findByPk(primary);
		Membro.formacao = form;
		Membro.cargo = cg;
		console.log("atualizado")
		//SALVANDO OS NOVOS DADOS
		const salvar = await Membro.save();

		console.log("Salvo os dados do id: "+primary)
	} catch(error){
		console.log("Houve um erro: "+error)
	}
}

module.exports.atualizarImg = async (primary, nm)=>{
	try{
		console.log("entrou no programa")
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log("sincronizado")
		//INICIALIZAÇÃO DA TABELA A SER ATUALIZADA
		const Imagem = await tabelas.imagens.findByPk(primary);
		Imagem.nome = nm;
		console.log("atualizado")
		//SALVANDO OS NOVOS DADOS
		const salvar = await Imagem.save();

		console.log("Salvo os dados do id: "+primary)
	} catch(error){
		console.log("Houve um erro: "+error)
	}
}

module.exports.atualizarServ = async (primary, sv, intro, desc)=>{
	try{
		console.log("entrou no programa")
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log("sincronizado")
		//INICIALIZAÇÃO DA TABELA A SER ATUALIZADA
		const Servico = await tabelas.servicos.findByPk(primary);
		Servico.servico = sv;
		Servico.introducao = intro;
		Servico.descricao = desc;
		console.log("atualizado")
		//SALVANDO OS NOVOS DADOS
		const salvar = await Servico.save();

		console.log("Salvo os dados do id: "+primary)
	} catch(error){
		console.log("Houve um erro: "+error)
	}
}

module.exports.atualizarEsc = async (primary, sb, vl, mis, vis, tel, wp, insta, fb, lkdin, tt, tk, mail)=>{
	try{
		console.log("entrou no programa")
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log("sincronizado")
		//INICIALIZAÇÃO DA TABELA A SER ATUALIZADA
		const Escritorio = await tabelas.escritorio.findByPk(primary);
		Escritorio.sobre = sb;
		Escritorio.valor = vl;
		Escritorio.missao = mis;
		Escritorio.visao = vis;
		Escritorio.telefone = tel;
		Escritorio.whatsapp = wp;
		Escritorio.instagram = insta;
		Escritorio.facebook = fb;
		Escritorio.linkedin = lkdin;
		Escritorio.twitter = tt;
		Escritorio.tiktok = tk;
		Escritorio.email = mail;
		console.log("atualizado")
		//SALVANDO OS NOVOS DADOS
		const salvar = await Escritorio.save();

		console.log("Salvo os dados do id: "+primary)
	} catch(error){
		console.log("Houve um erro: "+error)
	}
}