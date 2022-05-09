const React = require('react')

function Def (html) {
    <html>
        <head>
            <title>Rest-Rant</title>
        </head>
        <body>
            {html.children}
        </body>
    </html>
}

module.exports = Def