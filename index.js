// DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()

// MIDDLEWARE


// ROUTES & CONTROLLERS
// Homepage route
app.get('/', (req, res) => {
    res.send('Rest-rant')
})

// Error Route
app.get('*', (req, res) => {
    res.status(404).send('Error 404 Page')
})

// LISTEN
app.listen(process.env.PORT || 3000)
