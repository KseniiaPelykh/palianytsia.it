const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.resolve(__dirname, '../dist')));

const studentAPI = require('./api/students')
app.get('/api/students', (req, res) => {
  const result = studentAPI.getStudentList();
  res.send(result)
})

app.get('/api/student/:filename', (req, res) => {
  const result = studentAPI.getStudentInfo(req.params.filename);
  res.send(result);
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT)
