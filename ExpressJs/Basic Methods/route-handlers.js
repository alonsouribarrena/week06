const express = require('express');
const app = express()

app.get('/one', (request, response, nextHandler)=>{
  response.type('text/plain');
  response.write('hello ');
  nextHandler()
})

app.get('/one', (request, response, nextHandler)=>{
  response.status(200).end('world')
})

app.get(
  '/two',
  (request, response, nextHandler)=>{
    response.type('text/plain');
    response.write('hello ');
    nextHandler();
  },
  (request, response, nextHandler)=>{
    response.status(200).end('mooon!')
  }
)

app.listen(3000,()=> console.log('web server running on 3000'))