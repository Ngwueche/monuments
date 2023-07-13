import express from 'express';
import  {getPostsController, createPostsController, updatePostsController, deletePostsController, likePostsController } from '../controllers/posts.js';

const router =  express.Router();

router.get('/', getPostsController)
router.post('/', createPostsController)
router.patch('/:id', updatePostsController)
router.delete('/:id', deletePostsController)
router.patch('/:id/likePost', likePostsController)

export default router;