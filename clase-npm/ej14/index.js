const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.status(200).send('Este request/response está OK');
});

app.get('/productos', function (req, res) {
    res.status(500).send('Ha ocurrido un error de servidor');
});

app.get('/contacto', function (req, res) {
    res.status(404).send('404 No encontrado');
});

app.listen(3000, function () {
    console.log('corriendo en el puerto 3000');
});

