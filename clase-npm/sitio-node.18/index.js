const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
app.use(express.static('public'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/home', function (req, res) {
  res.render('home')
})

const products = [
  { section: 'MacBook', items: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra'] },
  { section: 'iPad', items: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories'] },
  { section: 'iPhone', items: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories'] }
]

app.get('/products', function (req, res) {         
  res.render('products', { products: products})
})

app.get('/contact', function (req, res) {
  res.render('contact')
})

app.listen(3000, function(){
    console.log('corriendo en el puerto 3000')
})