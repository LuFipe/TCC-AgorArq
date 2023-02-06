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
		const membros = await tabelas.membros.findAll();
		const imagens = await tabelas.imagens.findAll();
		const links = await tabelas.links.findAll();
		const servicos = await tabelas.servicos.findAll();
		const escritorio = await tabelas.escritorio.findAll();
		const proj_memb = await tabelas.proj_memb.findAll();
		
		let dados = {metadados,projetos,membros,imagens,links,servicos,escritorio,proj_memb}
		
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
}