const criar = require('./BancoDados/criarDB')
const ler = require('./BancoDados/readAll')
const atualizar = require('./BancoDados/updateDB')
const deletar = require('./BancoDados/deleteDB')

/*
criar.criarMeta('YT_Financiamento_01', 'Financas', 'tioo', 'cheiro do queijo');
async function tentarler(ident){
	let dado = await ler.lerMetaOnde(ident)
	dado = JSON.stringify(dado)
	dado = JSON.parse(dado)
	console.log(dado[0])
	return dado
} 
tentarler('YT_Financiamento_01')
*/
//atualizar.atualizarLinks(1,"https://www.youtube.com/embed/Qs6wj0z8K20",null,null,null)
//ler.lerMetaOnde('YT_Financiamento_01')
//atualizar.atualizarMeta('oi', 'nome atualizado', 'tipo atualizado','introducao atualizada', 'descricao atualizada');
//deletar.deleteMeta('hiiii')
atualizar.atualizarImg(8,'proj','servico','jpg',6)