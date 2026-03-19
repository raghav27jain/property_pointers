// server/models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String }, // /uploads/blogs/filename.jpg
    author: { type: String, default: 'PropertyPointers Host' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
