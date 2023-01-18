const Sequelize = require('sequelize');
const db = require('./db');

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
		data:{
			type: Sequelize.DATE,
			allowNull: false
		},
		intro:{
			type: Sequelize.TEXT,
			allowNull: false
		},
		descricao:{
			type: Sequelize.TEXT,
			allowNull: false
		},
		caminho:{
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{freezeTableName: true}
);

module.exports.projetos = db.define('projetos',{
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
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

module.exports.artigos = db.define('artifo',{
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
		}
	},
	{freezeTableName: true}
);

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
		id_ref:{
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{freezeTableName: true}
);

module.exports.links = db.define('links',{
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		youtube:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		sketchfab:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		prezi:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		arquivo:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		id_ref{
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{freezeTableName: true}
);

module.exports.servicos = db.define('servicos',{
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		servico:{
			type: Sequelize.STRING,
			allowNull: true
		},
		descricao:{
			type: Sequelize.TEXT,
			allowNull: true
		},
		thumbnail:{
			type: Sequelize.TEXT,
			allowNull: true
		}
	},
	{freezeTableName: true}
);

module.exports.escritorio = db.define('escritorio',{
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		sobre:{
			type: Sequelize.TEXT,
			allowNull: false
		},
		telefone:{
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
			allowNull: false
		}
	},
	{freezeTableName: true}
);

module.exports.proj_memb = new db.define('proj_memb',{
		id:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		id_memb:{
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false
		},
		id_proj:{
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false
		}
	},
	{freezeTableName: true}
);