// DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()

// MIDDLEWARE


// ROUTES & CONTROLLERS
app.get('/', (req, res) => {
    res.send('Rest-rant')
})

// LISTEN
app.listen(process.env.PORT || 3000)
