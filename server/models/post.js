const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    image: String
})

module.exports = mongoose.model('post', PostSchema);