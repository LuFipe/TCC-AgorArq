//																			//
//	ESTE MODULO POSSUI AS DEFINIÇÕES QUE SERÃO APLICADAS AO BANCO DE DADOS	//
//	AQUI SE ENCONTRMA AS TABELAS E SUAS COLUNAS								//
//																			//

const Sequelize = require('sequelize');
const db = require('./db');

//DEFINIÇÃO DA TABELA METADADOS
module.exports.meta = db.define('metadados',{
		id:{
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false
		},
		nome:{
			type: Sequelize.STRING,
			allowNull: false
		},
		tipo:{
			type: Sequelize.STRING,
			allowNull: false
		},
		intro:{
			type: Sequelize.TEXT,
			allowNull: false
		},
		descricao:{
			type: Sequelize.TEXT,
			allowNull: false
		}
	},
	{freezeTableName: true}
);

//DEFINIÇÃO DA TABELA PROJETOS
module.exports.projetos = db.define('projetos',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	data:{
		type: Sequelize.STRING,
		allowNull: false
	},
	local:{
		type: Sequelize.STRING,
		allowNull: false
	},
	escritorio:{
		type: Sequelize.STRING,
		allowNull: false
	},
	metragem:{
		type: Sequelize.INTEGER,
		allowNull: false
	},
	id_ref:{
		type: Sequelize.STRING,
		allowNull: false
	}
},
{freezeTableName: true}
);

//DEFINIÇÃO DA TABELA MEMBROS DO PROJETO
module.exports.proj_memb = db.define('proj_memb',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	id_memb:{
		type: Sequelize.STRING,
		allowNull: false
	},
	id_proj:{
		type: Sequelize.STRING,
		allowNull: false
	}
},
{freezeTableName: true}
);

//DEFINIÇÃO DA TABELA ARTIGO
module.exports.artigos = db.define('artigo',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	escritor_id:{
		type: Sequelize.STRING,
		allowNull: false
	},
	assunto:{
		type: Sequelize.STRING,
		allowNull: false
	},
	subtipo:{
		type: Sequelize.STRING,
		allowNull: false
	},
	id_ref:{
		type: Sequelize.STRING,
		allowNull:false
	}
},
{freezeTableName: true}
);

//DEFINIÇÃO DA TABELA LINKS
module.exports.links = db.define('links',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	site:{
		type: Sequelize.STRING,
		allowNull: false
	},
	youtube:{
		type: Sequelize.STRING,
		allowNull: true
	},
	sketchfab:{
		type: Sequelize.STRING,
		allowNull: true
	},
	prezi:{
		type: Sequelize.STRING,
		allowNull: true
	},
	arquivo:{
		type: Sequelize.STRING,
		allowNull: true
	},
	id_ref:{
		type: Sequelize.STRING,
		allowNull: false
	}
},
{freezeTableName: true}
);

//DEFINIÇÃO DA TABELA MEMBROS
module.exports.membros = db.define('membros',{
	id:{
		type: Sequelize.STRING,
		primaryKey: true,
		allowNull: false
	},
	nome:{
		type: Sequelize.STRING,
		allowNull: false
	},
	formacao:{
		type: Sequelize.STRING,
		allowNull: false
	},
	cargo:{
		type: Sequelize.STRING,
		allowNull: false
	}
},
{freezeTableName: true}
);

//DEFINIÇÃO DA TABELA IMAGENS
module.exports.imagens = db.define('imagens',{
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	nome:{
		type: Sequelize.STRING,
		allowNull: false
	},
	natureza:{
		type: Sequelize.STRING,
		allowNull: false
	},
	extensao:{
		type: Sequelize.STRING,
		allowNull:false
	},
	thumb:{
		type: Sequelize.BOOLEAN,
		allowNull:false
	},
	id_ref:{
		type: Sequelize.STRING,
		allowNull: false
	}
},
{freezeTableName: true}
);

//DEFINIÇÃO DA TABELA SERVIÇOS
module.exports.servicos = db.define('servicos',{
	id:{
		type: Sequelize.STRING,
		primaryKey: true,
		allowNull: false
		},
	servico:{
		type: Sequelize.STRING,
		allowNull: true
		},
	introducao:{
		type: Sequelize.TEXT,
		allowNull: true
		},
	descricao:{
		type: Sequelize.TEXT,
		allowNull: true
		}
	},
	{freezeTableName: true}
);

//DEFINIÇÃO DA TABELA ESCRITÓRIO
module.exports.escritorio = db.define('escritorio',{
		id:{
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false
		},
		sobre:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		valor:{
			type: Sequelize.STRING,
			allowNull: true
		},
		missao:{
			type: Sequelize.STRING,
			allowNull: true
		},
		visao:{
			type: Sequelize.STRING,
			allowNull: true
		},
		nome:{
			type: Sequelize.STRING,
			allowNull: false
		},
		whatsapp:{
			type: Sequelize.STRING,
			allowNull: false
		},
		instagram:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		facebook:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		linkedin:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		twitter:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		tiktok:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		email:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		endereco:{
			type: Sequelize.STRING,
			allowNull: true
		},
		proprio:{
			type: Sequelize.BOOLEAN,
			allowNull:false
		}
	},
	{freezeTableName: true}
);