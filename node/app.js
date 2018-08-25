const express = require('express')
var auth = require('basic-auth')

const app = express()

app.get('/', (req, res, next) => {
  var credentials = auth(req)

  console.log("ssss")
  if (!credentials || credentials.name !== 'john' || credentials.pass !== 'secret') {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Access denied')
  } else {
    next()
  }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

