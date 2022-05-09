// DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()

// MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// Places Controller
app.use('/places', require('./controllers/places'))

// ROUTES
// Homepage route
app.get('/', (req, res) => {
    res.render('home')
})

// Error Route
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

// LISTEN
app.listen(process.env.PORT || 3000)
