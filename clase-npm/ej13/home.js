const express = require('express')
const app = express()
var wiki = require('./productos.js');

app.use('/', wiki);
app.listen(3000, function(){
    console.log('corriendo en el puerto 3000');
})