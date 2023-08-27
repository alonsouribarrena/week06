const express = require('express');
const app = express();

app.get('/',(request, response, nextHandle)=>{
  response.status(200).send('Hello Matrix Master coders from ExpressJS')
})

app.listen(3000, ()=> console.log('web server running on port 3000'))