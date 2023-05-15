const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')


const categoriesController = require('./category/CategoriesControler')
const articlesController = require('./article/ArticleController')

const Article = require('./article/Article')
const Category = require('./category/Category')

//database

connection.authenticate()
.then(() => {
    console.log('conexão feita com o banco de dados')
}).catch((msgErro) => {
    console.log(msgErro)
})


//View engine
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})


app.use('/', categoriesController)
app.use('/', articlesController)


app.listen(8088, () => {
    console.log('O Servidor está rodando!')
})