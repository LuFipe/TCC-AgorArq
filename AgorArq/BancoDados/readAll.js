const db = require('../db');
const tabelas = require('../tabelas');

module.exports.lerTudo = async ()=>{
	try{
	//ETAPA DE SINCRONIZAÇÃO COM O DB
		const sinc = await db.sync();
		console.log(sinc);
	//LEITURA DE TODOS OS DADOS DE CADA TABELA
		const metadados = await tabelas.meta.findAll();
		const projetos = await tabelas.projetos.findAll();
		const proj_memb = await tabelas.proj_memb.findAll();
		const artigos = await tabelas.artigos.findAll();
		const links = await tabelas.links.findAll();
		const membros = await tabelas.membros.findAll();
		const imagens = await tabelas.imagens.findAll();
		const servicos = await tabelas.servicos.findAll();
		const escritorio = await tabelas.escritorio.findAll();
		
		let dados = {metadados,projetos,proj_memb,artigos,links,membros,imagens,servicos,escritorio}
		
		return dados;
		//DEBUG DE LEITURA DOS DADOS
		/*
		console.log("\n\nMostrando Dados:\n")
		console.log(dados.metadados[0].dataValues.id)

		console.log("\n\nIniciando mostrar o DB\n\n");
		console.log(metadados);
		console.log(projetos);
		console.log(membros);
		console.log(imagens);
		console.log(links);
		console.log(servicos);
		console.log(escritorio);
		console.log(proj_memb);
		console.log("\n\nFinalizado!!!\n\n")
	*/
	} catch(error){
		console.log(error);
	}
};

module.exports.lerMeta = async ()=>{
	try{
		//SINCRONIZAR COM O BANCO DE DADOS
		const sinc = await db.sync();
		console.log("Sincronização completa:\n")
		console.log(sinc)
		//LEITURA
		const metadados = await tabelas.meta.findAll()
		console.log("Leitura com sucesso:\n")
		console.log(metadados)
		return metadados
	} catch(error){
		console.log("Error na leitura dos metadados: "+error)
	}
};

module.exports.lerProjetos = async ()=>{
	try{
		//SINCRONIZAR COM O BANCO DE DADOS
		const sinc = await db.sync();
		console.log("Sincronização completa:\n")
		console.log(sinc)
		//LEITURA
		const dados = await tabelas.projetos.findAll()
		console.log("Leitura com sucesso:\n")
		console.log(dados)
		return dados
	} catch(error){
		console.log("Error na leitura dos projetos: "+error)
	}
};

module.exports.lerProj_Memb = async ()=>{
	try{
		//SINCRONIZAR COM O BANCO DE DADOS
		const sinc = await db.sync();
		console.log("Sincronização completa:\n")
		console.log(sinc)
		//LEITURA
		const dados = await tabelas.proj_memb.findAll()
		console.log("Leitura com sucesso:\n")
		console.log(dados)
		return dados
	} catch(error){
		console.log("Error na leitura dos membros de projeto: "+error)
	}
};

module.exports.lerArt = async ()=>{
	try{
		//SINCRONIZAR COM O BANCO DE DADOS
		const sinc = await db.sync();
		console.log("Sincronização completa:\n")
		console.log(sinc)
		//LEITURA
		const dados = await tabelas.artigos.findAll()
		console.log("Leitura com sucesso:\n")
		console.log(dados)
		return dados
	} catch(error){
		console.log("Error na leitura dos artigos: "+error)
	}
};

module.exports.lerLink = async ()=>{
	try{
		//SINCRONIZAR COM O BANCO DE DADOS
		const sinc = await db.sync();
		console.log("Sincronização completa:\n")
		console.log(sinc)
		//LEITURA
		const dados = await tabelas.links.findAll()
		console.log("Leitura com sucesso:\n")
		console.log(dados)
		return dados
	} catch(error){
		console.log("Error na leitura dos links: "+error)
	}
};

module.exports.lerMembros = async ()=>{
	try{
		//SINCRONIZAR COM O BANCO DE DADOS
		const sinc = await db.sync();
		console.log("Sincronização completa:\n")
		console.log(sinc)
		//LEITURA
		const dados = await tabelas.membros.findAll()
		console.log("Leitura dos membros com sucesso:\n")
		//DEBUG:
		//console.log(dados[0]['dataValues'])
		//console.log("\n\n\n")
		return dados;
	} catch(error){
		console.log("Error na leitura dos membros: "+error)
	}
};

module.exports.lerImg = async ()=>{
	try{
		//SINCRONIZAR COM O BANCO DE DADOS
		const sinc = await db.sync();
		console.log("Sincronização completa:\n")
		console.log(sinc)
		//LEITURA
		const dados = await tabelas.imagens.findAll()
		console.log("Leitura com sucesso:\n")
		console.log(dados)
		return dados
	} catch(error){
		console.log("Error na leitura dos imagens: "+error)
	}
};

module.exports.lerServ = async ()=>{
	try{
		//SINCRONIZAR COM O BANCO DE DADOS
		const sinc = await db.sync();
		console.log("Sincronização completa:\n")
		console.log(sinc)
		//LEITURA
		const dados = await tabelas.servicos.findAll()
		console.log("Leitura com sucesso:\n")
		console.log(dados)
		return dados
	} catch(error){
		console.log("Error na leitura dos serviços: "+error)
	}
};

module.exports.lerEsc = async ()=>{
	try{
		//SINCRONIZAR COM O BANCO DE DADOS
		const sinc = await db.sync();
		console.log("Sincronização completa:\n")
		console.log(sinc)
		//LEITURA
		const dados = await tabelas.escritorio.findAll()
		console.log("Leitura com sucesso:\n")
		console.log(dados)
		return dados
	} catch(error){
		console.log("Error na leitura dos escritorios: "+error)
	}
};