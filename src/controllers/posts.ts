import type { Request, Response } from 'express';

// Decorators
import Controller from '../decorators/controller.js';
import Route from '../decorators/route.js';

@Controller('/posts')
class Posts {
    // Create
    @Route('post', '/')
    createBlog(req: Request, res: Response) {
        res.status(200).json({ data: {} });
    }

    // Read all
    @Route('get', '/')
    getPosts(req: Request, res: Response) {
        res.status(200).json({ data: [] });
    }

    // Read one
    @Route('get', '/:id')
    geBlog(req: Request, res: Response) {
        res.status(200).json({ data: {} });
    }

    //Update
    @Route('patch', '/')
    updateBlog(req: Request, res: Response) {
        res.status(200).json({ data: {} });
    }

    // Delete Blog
    @Route('delete', '/:id')
    deleteBlog(req: Request, res: Response) {
        const { id } = req.params;

        res.status(200).json({ data: {} });
    }

    // Like Blog
    @Route('post', '/:id/like')
    likeBlog(req: Request, res: Response) {
        const { id } = req.params;

        res.status(200).json({ data: {} });
    }

    // Save Blog
    @Route('post', '/:id/save')
    saveBlog(req: Request, res: Response) {
        const { id } = req.params;

        res.status(200).json({ data: {} });
    }
}

export default Posts;
