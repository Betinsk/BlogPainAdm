const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
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


app.listen(8088, () => {
    console.log('O Servidor está rodando!')
})