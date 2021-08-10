const router = require('express').Router();
const postController = require('../controllers/post.controllers');

router.get('/', postController.readPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);
router.patch('/comment-post/:id', postController.commentPost);
router.patch('/edited-comment-post/:id', postController.editPost);
router.patch('delete-comment-post/:id', postController.deletePost);


module.exports = router;