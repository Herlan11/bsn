const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A title is required!!!"],
        maxLength: [30, "The title length can be no longer than 30 characters!"]
    },
    // player:{
    //     type: String,
    //     required: [true, " A Player is required!!!"],
    // },
    comment:{
        type: String,
        required: [true, "What is your take on this player"]
    }
}, {timestamps: true})

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;