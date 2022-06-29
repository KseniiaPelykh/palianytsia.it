const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json(
        {
            students: [
                {
                    name: "Олексій В."
                },
                {
                    name: "Руслан О."
                },
                {
                    name: "Котляр Є."
                }
            ]
        });
})

router.get('/pippo_pluto', (req, res, next) => {
    res.render('students/pippo-pluto', null)
})

router.get('/rus_oras', (req, res, next) => {
    res.render('students/rus_oras', null)
})

router.get('/BrainOut', (req, res, next) => {
    res.render('students/brain0ut', null)
})

router.get('/kott', (req, res, next) => {
    res.render('students/kott', null)
})

module.exports = router
