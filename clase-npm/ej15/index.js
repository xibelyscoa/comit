const express = require('express');
const app = express();

var requestTime = function (req, res, next) {
    const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
    console.log(mensaje);
    next();
};
app.use(requestTime);
app.get('/', function(req, res) {
    res.status(200).json({
        status: 200,
        message: 'Este request/response está OK'
    });
});
  app.listen(3000, function() {
    console.log('corriendo en el puerto 3000!');
  });
  
  