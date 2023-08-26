const express = require('express')
const route = express.Router()
const postController = require('../controller/postController')

route.get('/', postController.getPost)
route.post('/create-post', postController.createPost)
route.post('/delete-post/:id', postController.deletePost)


module.exports= route