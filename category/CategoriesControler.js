const express = require('express')
const router = express.Router()
const Category = require('./Category')
const { default: slugify } = require('slugify')

router.get('/categories', (req, res) => {
    res.send('ROTA DE CATEGORiAS')
})


router.get('/admin/categories/new', (req, res) => {
    res.render('admin/new')
})

router.post('/categories/save', (req, res) => {
    var title = req.body.title
    if(title != undefined) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect('/')
        })
    }
    else {
        res.redirect('/admin/categories/new')
    }
})

router.get('/admin/categories', (req, res) => {

    Category.findAll().then(categories => {
        res.render('admin/index', {categories: categories})
    })
})


module.exports = router