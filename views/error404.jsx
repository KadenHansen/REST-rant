const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <h1>404</h1>
            <p>sorry, it looks like this page does not exist</p>
        </Def>
    )
}

module.exports = error404