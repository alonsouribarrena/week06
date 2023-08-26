const express = require('express')
require('./config/mongo')
const app = express()

require('dotenv').config()

const route = require('./config/route')
app.use(express.urlencoded({extended: false}))
app.use(express.json()) 

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(route)
let port = process.env.PORT
app.listen(port, console.log(`my app's port is ${port}`))