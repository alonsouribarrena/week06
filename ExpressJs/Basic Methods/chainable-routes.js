const express = require('express');
const app = express();

app
.route('/home')
.get((request, response, nextHandler)=>{
  response.type('text/html')
  response.write('<!DOCTYPE html>')
  nextHandler()
})
.get((request, response, nextHandler)=>{
  response.end(`
  <html lang="en">
   <head>
    <meta charset="utf-8">
    <title>WebApp by ExpressJS</title>
   </head>
   <body role="application">
     <h2>Press send!</h2>
     <form method="post" action="/home">
       <input type="text" />
       <button type="submit">Send</button>
     </form>
   </body>
  </html>
`)
})
.post((request, response, nextHandler)=>{
  response.send('Got it!')
})

app.listen(1337, ()=> console.log('webserver running on 3000'))