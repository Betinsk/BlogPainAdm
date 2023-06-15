const express = require('express')
const router = express.Router()
const Category = require('../category/Category')
const Article = require('')

router.get('/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', {
            categories: categories
        })

    })
})



module.exports = router
