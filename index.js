const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.send('Palianytsia!')
})

app.listen(process.env.PORT)
