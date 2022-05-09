const React = require('react')
const Def = require('../default')

function home (data) {
    let placesFormatted = data.places.map((place) => {
        return (
                <div>
                    <h2>{place.name}</h2>
                    <img src={place.image} alt={place.name} />
                </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Restaurants</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = home