const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../category/Category')

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article)
Article.belongsTo(Category) //Artigo pertence a categoria

Article.sync({force: false})

module.exports = Article

