const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const connection = require('./database/database.js')

const categoriesController = require("./categories/categoriesController")

//View engine
app.set('view engine', 'ejs')

app.use(express.static('public'))


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Database
connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso!")
}).catch((error) => {
    console.log(error)
})

app.use("/", categoriesController)

app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.listen(8080, () => {
    console.log('Servidor está rodando!')
})
