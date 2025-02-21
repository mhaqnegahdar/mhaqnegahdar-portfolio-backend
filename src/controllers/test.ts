import type { Request, Response } from 'express';

// Decorators
import Controller from '../decorators/controller.js';
import Route from '../decorators/route.js';

@Controller('/test')
class Test {
    @Route('get', '/get')
    getTest(req: Request, res: Response) {
        res.status(200).json({ message: 'Test Route Is Working :)' });
    }

    @Route('post', '/post')
    postTest(req: Request, res: Response) {
        res.status(200).json({ message: 'Post Test Route Is Working :)', body: req.body });
    }
}

export default Test;
