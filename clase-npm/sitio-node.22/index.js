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
  {
     section: 'MacBook', 
     items: [
       'MacBook', 
       'MacBook Air', 
       'MacBook Pro', 
       'iMac', 
       'iMac Pro', 
       'Mac Pro', 
       'Mac mini', 
       'Accessories', 
       'High Sierra'
      ] 
  },
  { section: 'iPad', items: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories'] },
  { section: 'iPhone', items: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories'] }
]

app.get('/products/:id', function (req, res) {
  const id = req.params.id
  const product = products[id]
  res.render('product', { product: product})
})

app.get('/contact', function (req, res) {
  res.render('contact',{ selected: { contact: true } })
})

app.get('/contact/submitporget', function (req, res) {
  console.log(req.query)
  const firstname = req.query.firstname
  const lastname = req.query.lastname
  const country = req.query.country
  const subject = req.query.subject

  res.send(`
    Nombre: ${firstname}
    Apellido: ${lastname}
    País: ${country}
    Mensaje: ${subject}
  `)
})
app.listen(3000, function(){
    console.log('corriendo en el puerto 3000')
})