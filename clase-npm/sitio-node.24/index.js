const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/contact', function (req, res) {
  res.render('contact',{ selected: { contact: true } })
})

app.post('/contact/submitporpost', function (req, res) {
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const country = req.body.country
  const subject = req.body.subject

  res.send(`
    Nombre: ${firstname}
    Apellido: ${lastname}
    País: ${country}
    Mensaje: ${subject}
  `)
})
app.get('/login', function (req, res) {
  res.render('login',{ selected: { login: true } })
})

app.post('/login/submitporpost', function (req, res) {
  const username = req.body.username
  const password = req.body.password

  res.send(`
    usuario: ${username}
    contrasena: ${password}
    
  `)
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


app.listen(3000, function(){
    console.log('corriendo en el puerto 3000')
})