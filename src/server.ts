import http from 'http';
import express from 'express';
import './config/logging';
import 'reflect-metadata';

// Handlers
import { loggingHandler } from './middlewares/loggingHandler.js';
import { corsHandler } from './middlewares/corsHandler.js';
import { routeNotFound } from './middlewares/routeNotFound.js';

// ENV
import { SERVER } from './config/config.js';
import defineRoutes from './modules/route.js';

// Controllers
import Test from './controllers/test.js';
import Comments from './controllers/comments.js';
import Posts from './controllers/posts.js';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
    logging.info('--------------------------');
    logging.info('Initializing API');
    logging.info('--------------------------');
    application.use(express.urlencoded({ extended: true }));
    application.use(express.json());

    logging.info('--------------------------');
    logging.info('Logging & Configuration');
    logging.info('--------------------------');
    application.use(loggingHandler);
    application.use(corsHandler);

    logging.info('--------------------------');
    logging.info('Define Controller Routing');
    logging.info('--------------------------');
    defineRoutes([Test, Comments, Posts], application);

    logging.info('--------------------------');
    logging.info('Route Not Found');
    logging.info('--------------------------');
    application.use(routeNotFound);

    logging.info('--------------------');
    logging.info('Start Server');
    logging.info('--------------------');
    httpServer = http.createServer(application);
    httpServer.listen(SERVER.SERVER_PORT, () => {
        logging.log('----------------------------------------');
        logging.log(`Server started on ${JSON.stringify(httpServer.address())}`);
        logging.log('----------------------------------------');
    });
};

export const ShutDown = (callback: any) => httpServer && httpServer.close(callback);

Main();
