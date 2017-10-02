const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
app.use(express.static('public'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/products', function (req, res) {
  res.render('products')
})

app.get('/contact', function (req, res) {
  res.render('contact')
})

app.listen(3000, function(){
    console.log('corriendo en el puerto 3000')
})