const { Router } = require('express');
const express         = require('express');
const router = Router();
const upload = require('../config/multer');
const { listPosts, storePost } = require('../controllers/postsController')

router.get('/post/all', listPosts);
router.post('/post/create', upload.single('file'), storePost);

module.exports = router;
