const Post = require("../models/post.model")

class PostService {

    async save({ title, content }) {
        const newPost = new Post({ title, content })
        //call method of mongoose
        await newPost.save()
        return newPost
    }
    async findAll() {
        return Post.find({})
    }
    async findById(id) {
        const post = await Post.findOne({ _id: id })
        return post
    }
    //update
    async update(id, { title, content }) {
        const post = await Post.findOne({ _id: id })
        if (!post) {
            throw Error()
        }
        if (title) {
            //update title
            post.title = title
        }
        if (content) {
            post.content = content
        }
        //update operations
        await post.save()
        return post
    }
    async remove(id) {
        const post = await Post.findOne({ _id: id })
        if (post) {
            await Post.deleteOne({ _id: id })
        }
        else {
            throw Error("No record is found")
        }
    }
}

module.exports = new PostService()