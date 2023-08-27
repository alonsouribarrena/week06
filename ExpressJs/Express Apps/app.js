const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const { clearCache } = require('ejs')
const Blog = require('./models/blog')


const app = express()


//connect to mongodb
const dbURI ='mongodb+srv://uribarrena:test1234@nodetuts.cjzgats.mongodb.net/'
mongoose.connect(dbURI)
.then((result)=> app.listen(3000))
.catch((err)=> console.log(err))

//register view engine
app.set('view engine', 'ejs');


//middleware & static files

app.use(express.static('public'))

app.use(morgan('dev'))

// app.use((req,res, next)=>{
//   console.log('in the next middelware');
//   next()
// });




//routes
app.get('/', (req,res)=>{
  // res.send('<p>home page</p>')
  res.redirect('/blogs')
});
app.get('/about', (req,res)=>{
  // res.send('<p>about page</p>')
  // res.sendFile('./views/about.html', {root:__dirname})
  res.render('about', {title: 'About'});
});


//blog routes
app.get('/blogs', (req,res)=>{
  Blog.find().sort({createdAt: -1})
  .then((result)=>{
    res.render('index', {title: 'all Blogs', blogs: result})
  })
  .catch((err)=>{
    console.log(err)
  })
})

app.get('/blogs/create', (req, res)=>{
  
  res.render('create', {title: 'New post'})
})

//404 page
app.use((req, res)=>{
  // res.status(404).sendFile('./views/404.html', {root:__dirname})
  res.status(404).render('404', {title: '404'})
  
})