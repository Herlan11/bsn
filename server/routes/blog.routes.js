const BlogController = require("../controllers/blog.controller");

module.exports = (app) => {
    app.get("/api/blogs", BlogController.findAllBlogs);
    app.post("/api/blogs", BlogController.createNewBlog);
    app.get("/api/blogs/:id", BlogController.findOneBlog);
    app.delete("/api/blogs/:id", BlogController.deleteOneBlog);
    app.put("/api/blogs/:id", BlogController.updateBlog);
}