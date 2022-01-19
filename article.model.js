const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String
})

module.exports = mongoose.model('Article', ArticleSchema)