const client = require('../database/config')


class PostServices {
    getAllPosts = async ()=>{
        const results = await client.query('SELECT * FROM post_entity')
        return results.rows
    }

    getPostById = async (id) => {
        const results = await client.query(`SELECT * FROM post_entity WHERE postId=${id}`)
        return results.rows[0]
    }
    
    createPost = async (post) => {
        const result = await client.query(`INSERT INTO post_entity (description, imageUrl, user_id) VALUES('${post.description}','${post.imageUrl}',${post.user_id})`)
        if (result.rowCount) {
            return 'post successfully created'
        }
        else {
            return 'There was error while creating the post'
        }
    }

    deletePost = async (id) => {
        const result = await client.query(`DELETE FROM post_entity WHERE postId =${id}`)
        return result
    }
}

module.exports = PostServices