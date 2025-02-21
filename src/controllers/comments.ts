import type { Request, Response } from 'express';

// Decorators
import Controller from '../decorators/controller.js';
import Route from '../decorators/route.js';

@Controller('/comments')
class Comments {
    // Create
    @Route('post', '/')
    createComment(req: Request, res: Response) {
        res.status(200).json({ data: {} });
    }

    // Read all
    @Route('get', '/')
    getComments(req: Request, res: Response) {
        res.status(200).json({ data: [] });
    }

    // Read one
    @Route('get', '/:id')
    geComment(req: Request, res: Response) {
        res.status(200).json({ data: {} });
    }

    //Update
    @Route('patch', '/')
    updateComment(req: Request, res: Response) {
        res.status(200).json({ data: {} });
    }

    // Delete Comment
    @Route('delete', '/:id')
    deleteComment(req: Request, res: Response) {
        res.status(200).json({ data: {} });
    }

    // reply Comment
    @Route('post', '/:id/reply')
    likeComment(req: Request, res: Response) {
        res.status(200).json({ data: {} });
    }
}

export default Comments;
