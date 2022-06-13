const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('students/list', null)
})

router.get('/pippo_pluto', (req, res, next) => {
    res.render('students/pippo-pluto', null)
})

router.get('/BrainOut', (req, res, next) => {
    res.render('students/brain0ut', null)
})

module.exports = router
