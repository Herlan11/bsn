const Blog = require("../models/blog.model");

module.exports = {
    
    findAllBlogs: (req, res) => {
        Blog.find()
            .then((allBlogs) => {
                console.log(allBlogs);
                res.json(allBlogs);
            })
            .catch((err) => {
                console.log("findAllBlogs has failed!");
                res.json({ message: "Someting went wrong in findAll", error:err })
            })
    },

    createNewBlog: (req, res) => {
        Blog.create(req.body)
            .then((newBlog) => {
                console.log(newBlog);
                res.json(newBlog);
            })
            .catch((err) => {
                console.log("something went wrong in createNewBlog");
                res.status(400).json(err)
            })
    },

    findOneBlog:(req,res) =>{
        Blog.findOne({_id: req.params.id})
            .then((oneBlog) => {
                console.log(oneBlog);
                res.json(oneBlog);
            })
            .catch((err) => {
                console.log("Fine one blog Failed");
                res.json({message : "Something went wrong in findOneBlog", error:err })
            })
    },

    deleteOneBlog: (req, res) => {
        Blog.deleteOne({_id: req.params.id})
            .then((deleteBlog) => {
                console.log(deleteBlog);
                res.json(deleteBlog);
            })
            .catch((err) => {
                console.log("delete One Movie failed");
                res.json({message : "Something went wrong in findOneBlog", error:err})
            })
    },

    updateBlog: (req, res) => {
        Blog.findOneAndUpdate({_id: req.params.id},
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedBlog) => {
                console.log(updatedBlog)
                res.json(updatedBlog);
            })
            .catch((err) => {
                console.log("Error updating blog")
                res.status(400).json(err)
            })
    }
}
