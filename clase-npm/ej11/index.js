const express = require('express')
const app = express()
const path = require('path')

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/productos', function (req, res) {
    res.sendFile(path.join(__dirname, 'productos.html'));
  });
app.listen(3000, function () {
    console.log('corriendo en el puerto 3000!');
  });