const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: './BancoDados/database.sqlite'
    }
)

module.exports = sequelize;