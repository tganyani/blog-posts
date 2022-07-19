const express = require('express')
const PostsController = require('../controllers/post.controllers')
const authMiddleware = require('../midleware/auth.midleware')
const upload = require('../midleware/imageUpload.midleware')

class PostRoutes {
    path = '/posts'
    router = express.Router()
    postController = new PostsController()
    constructor(){
        this.initialiseRoutes()
    }

    initialiseRoutes(){
        this.router.get(`${this.path}`, this.postController.getAllPosts)
        this.router.get(`${this.path}/:id`,authMiddleware, this.postController.getPostById)
        this.router.post(`${this.path}`, authMiddleware, upload.single('image'), this.postController.createPost)
        this.router.delete(`${this.path}/:id`, authMiddleware, this.postController.deletePost)
    }
}


module.exports = new PostRoutes


