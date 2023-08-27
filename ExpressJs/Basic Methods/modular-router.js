const express = require('express')
const app = express();
const miniapp = express.Router()

miniapp.get('/home',(request, response, next)=>{
  const url = request.originalUrl
  response.status(200).send(`you are visiting /home from ${url}`)
})

app.use('/first', miniapp)
app.use('/second', miniapp)

app.listen(3000, ()=> console.log('Web server running on 3000'))

