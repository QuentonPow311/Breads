const express = require('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// MIDDLEWARE
app.use(express.static('public'))

//ROUTES
app.get('/', (req, res) => {
res.send('Welcome to an Awesome app about breads!')

})

// //Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404 not found bud.')
  })
  

//LISTEN
app.listen(PORT, () => {

    console.log('listening on port', PORT);
})  


