var expres = require('express');
var app = expres();
app.get('/', function (request, response) {
  response.send('Holaaa esta es la raiz del sitio!');
});

app.get('/productos', function (req, res) {
  res.send('listado de productos');
});

app.post('/productos', function (req, res) {
  res.send('Crear un Producto');
});

app.put('/productos', function (req, res) {
  res.send('Actualizar un Producto');
});

app.delete('/productos', function (req, res) {
  res.send('Borrar un Producto');
});

app.get('/usuarios', function (req, res) {
  res.send('listado de usuarios');
});

app.post('/usuarios', function (req, res) {
  res.send('Crear un usuario');
});

app.put('/usuarios', function (req, res) {
  res.send('Actualizar un usuario');
});

app.delete('/usuarios', function (req, res) {
  res.send('Borrar un usuario');
});

app.listen(3000, function () {
  console.log('corriendo en el puerto 3000!');
});