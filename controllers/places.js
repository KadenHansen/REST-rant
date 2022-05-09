const router = require('express').Router()

// GET ROUTES //
// Render all restaurants
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        image: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        image: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', {places})
})

module.exports = router