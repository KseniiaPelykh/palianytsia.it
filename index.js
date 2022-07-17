const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.resolve(__dirname, './dist')));

const studentRouter = require('./routes/students')
app.use('/api/students', studentRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT)
