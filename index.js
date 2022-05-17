const express = require('express')
const auth = require('basic-auth')
const app = express()
const port = 8080

app.use((req, res, next) => {
    console.log(req.headers)

    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        res.status(401).end('Missing Authorization Header');
    } else {

        console.log(auth(req))

        const { name, pass } = auth(req)

        if (name === 'bobbylee' && pass === '123456') {
            res.status(200)
            res.end()
        } else {
            res.status(401)
            res.end('Unauthorized')
        }
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))