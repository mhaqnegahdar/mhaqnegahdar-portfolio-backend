import type { Request, Response } from 'express';

// Decorators
import Controller from '../decorators/controller.js';
import Route from '../decorators/route.js';

//Middlewares
import { ClerkExpressRequireAuth, clerkClient } from '@clerk/clerk-sdk-node';

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
    @Route('get', '/protected', [ClerkExpressRequireAuth()])
    async protectedTest(req: Request, res: Response) {
        // Use `getAuth()` to get the user's `userId`
        const { userId } = req.auth;

        // Use Clerk's JavaScript Backend SDK to get the user's User object
        let user;
        if (userId) user = await clerkClient.users.getUser(userId);
        res.status(200).json({ message: 'Protected Test Route Is Working :)', user, auth: req.auth });
    }
    @Route('get', '/protected3')
    protectedTest2(req: Request, res: Response) {
        res.status(200).json({ message: 'Protected Test Route Is Working :)', body: req.body });
    }
}

export default Test;
