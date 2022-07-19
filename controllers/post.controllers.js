const PostServices = require('../services/posts.services')

class PostsController {

    postsService = new PostServices()

    getAllPosts = async (req, res, next) => {
        try {
            const posts = await this.postsService.getAllPosts()
            res.render('posts',{posts})
        } catch (err) {
            next(err)
        }
    }
    getPostById = async (req, res, next) => {
        try {
            res.json(await this.postsService.getPostById(Number(req.params.id)))
        } catch (err) {
            next(err)
        }
    }
    createPost = async (req, res, next) => {
        try {
            const postData = {...req.body,imageUrl: req.file.filename,user_id: req.session.userId} 
            await this.postsService.createPost(postData)
            res.render('newpost',{message: "Posts successfully created"})
        } catch (err) {
            next(err)
        }
    }

    deletePost = async (req, res, next)=>{
        try {
            res.json(await this.postsService.deletePost(req.params.id))
        } catch (err) {
            
        }
    }
}


module.exports = PostsController


