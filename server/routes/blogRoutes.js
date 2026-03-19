// server/routes/blogRoutes.js
const express = require('express');
const path = require('path');
const multer = require('multer');
const Blog = require('../models/Blog');
const hostAuth = require('../middleware/hostAuth');

const router = express.Router();

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads', 'blogs'));
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, unique + ext);
  },
});
const upload = multer({ storage });

// GET all blogs (public)
router.get('/', async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error('Error fetching blogs:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET one blog (public)
router.get('/:id', async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Blog not found' });
    res.json(post);
  } catch (err) {
    console.error('Error fetching blog:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// CREATE blog (host only, optional image)
router.post('/', hostAuth, upload.single('image'), async (req, res) => {
  try {
    const { title, slug, excerpt, content } = req.body;

    if (!title || !slug || !excerpt || !content) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existing = await Blog.findOne({ slug });
    if (existing) {
      return res.status(409).json({ message: 'Slug already exists' });
    }

    let imageUrl = '';
    if (req.file) {
      imageUrl = `/uploads/blogs/${req.file.filename}`;
    }

    const post = await Blog.create({
      title,
      slug,
      excerpt,
      content,
      imageUrl,
      author: 'PropertyPointers Host',
    });

    res.status(201).json(post);
  } catch (err) {
    console.error('Error creating blog:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE blog (host only)
router.delete('/:id', hostAuth, async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Error deleting blog:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
