var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('página home usamos el método GET');
});

router.post('/', function(req, res) {
  res.send('página home usamos el método POST');
});

router.get('/productos', function(req, res) {
  res.send('páguna productos usamos el método GET');
});

router.post('/productos', function(req, res) {
  res.send('página productos usamos el método POST');
});

router.put('/productos', function(req, res) {
    res.send('página productos usamos el método PUT');
  });
  
  router.delete('/productos', function(req, res) {
    res.send('página productos usamos el método DELETE');
  });

module.exports = router;