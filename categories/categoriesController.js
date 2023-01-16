const express = require("express")
const router = express.Router()

router.get('/categories', (req, res) => {
    res.send("<h1>ROTA DE CATEGORIAS</h1>")
})

router.get('/admim/categories', (req, res) => {
    res.send("<h1>ROTA para criar nova categoria")
})

module.exports = router