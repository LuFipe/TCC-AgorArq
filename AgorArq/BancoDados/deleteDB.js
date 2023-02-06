const db = require('../db');
const tabelas = require('../tabelas');

module.exports.deleteMeta = async (primary)=>{
	try{
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log('\nBanco de dados foi inicializado corretamente')
		//INICIALIZAÇÃO DO BANCO DE DADOS E DESTRUIÇÃO
		const Metadado = await tabelas.meta.findByPk(primary)
		Metadado.destroy();
		console.log('\nLinhas foi destruida com sucesso, id :'+primary)
	} catch(error){
		console.log("Deu um erro do tipo: "+error);
	}
}

module.exports.deleteProj = async (primary)=>{
	try{
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log('\nBanco de dados foi inicializado corretamente')
		//INICIALIZAÇÃO DO BANCO DE DADOS E DESTRUIÇÃO
		const Projeto = await tabelas.projetos.findByPk(primary)
		Projeto.destroy();
		console.log('\nLinhas foi destruida com sucesso, id :'+primary)
	} catch(error){
		console.log("Deu um erro do tipo: "+error);
	}
}

module.exports.deleteMeta = async (primary)=>{
	try{
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log('\nBanco de dados foi inicializado corretamente')
		//INICIALIZAÇÃO DO BANCO DE DADOS E DESTRUIÇÃO
		const Artigo = await tabelas.artigos.findByPk(primary)
		Artigo.destroy();
		console.log('\nLinhas foi destruida com sucesso, id :'+primary)
	} catch(error){
		console.log("Deu um erro do tipo: "+error);
	}
}

module.exports.deleteMemb = async (primary)=>{
	try{
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log('\nBanco de dados foi inicializado corretamente')
		//INICIALIZAÇÃO DO BANCO DE DADOS E DESTRUIÇÃO
		const Membro = await tabelas.membros.findByPk(primary)
		Membro.destroy();
		console.log('\nLinhas foi destruida com sucesso, id :'+primary)
	} catch(error){
		console.log("Deu um erro do tipo: "+error);
	}
}

module.exports.deleteImg = async (primary)=>{
	try{
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log('\nBanco de dados foi inicializado corretamente')
		//INICIALIZAÇÃO DO BANCO DE DADOS E DESTRUIÇÃO
		const Imagem = await tabelas.imagens.findByPk(primary)
		Imagem.destroy();
		console.log('\nLinhas foi destruida com sucesso, id :'+primary)
	} catch(error){
		console.log("Deu um erro do tipo: "+error);
	}
}

module.exports.deleteLink = async (primary)=>{
	try{
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log('\nBanco de dados foi inicializado corretamente')
		//INICIALIZAÇÃO DO BANCO DE DADOS E DESTRUIÇÃO
		const Link = await tabelas.links.findByPk(primary)
		Link.destroy();
		console.log('\nLinhas foi destruida com sucesso, id :'+primary)
	} catch(error){
		console.log("Deu um erro do tipo: "+error);
	}
}

module.exports.deleteServ = async (primary)=>{
	try{
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log('\nBanco de dados foi inicializado corretamente')
		//INICIALIZAÇÃO DO BANCO DE DADOS E DESTRUIÇÃO
		const Servico = await tabelas.servicos.findByPk(primary)
		Servico.destroy();
		console.log('\nLinhas foi destruida com sucesso, id :'+primary)
	} catch(error){
		console.log("Deu um erro do tipo: "+error);
	}
}

module.exports.deleteEsc = async (primary)=>{
	try{
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log('\nBanco de dados foi inicializado corretamente')
		//INICIALIZAÇÃO DO BANCO DE DADOS E DESTRUIÇÃO
		const Escritorio = await tabelas.escritorio.findByPk(primary)
		Escritorio.destroy();
		console.log('\nLinhas foi destruida com sucesso, id :'+primary)
	} catch(error){
		console.log("Deu um erro do tipo: "+error);
	}
}

module.exports.deleteProj_Memb = async (primary)=>{
	try{
		//SINCRONIZAÇÃO DO BANCO DE DADOS
		const sinc = await db.sync();
		console.log(sinc);
		console.log('\nBanco de dados foi inicializado corretamente')
		//INICIALIZAÇÃO DO BANCO DE DADOS E DESTRUIÇÃO
		const Mem_Proj = await tabelas.proj_memb.findByPk(primary)
		Mem_Proj.destroy();
		console.log('\nLinhas foi destruida com sucesso, id :'+primary)
	} catch(error){
		console.log("Deu um erro do tipo: "+error);
	}
}