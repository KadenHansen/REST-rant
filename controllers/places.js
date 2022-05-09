const router = require('express').Router()

// GET ROUTES //
// Render all restaurants
router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router