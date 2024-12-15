const express = require('express');
const { getAllBlogs, addBlog } = require('../controllers/blogController');
const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', addBlog);

module.exports = router;
