const Post = require('../models/post-model');

module.exports = {
    getAllPosts: (req, res) => {
        Post.find()
            .then(result => {
                res.json(result);
            })
            .catch(err => console.log(err));
    },

    createPost: (req, res) => {
        const { title, body } = req.body;

        const newPost = new Post({
            title,
            body
        });

        newPost.save()
            .then(result => {
                res.json(result)
            })
            .catch(err => console.log(err));
    }
}