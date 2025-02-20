import http from 'http';
import express from 'express';
import './config/logging';
import 'reflect-metadata';

// Handlers
import { loggingHandler } from './middlewares/loggingHandler';
import { corsHandler } from './middlewares/corsHandler';
import { routeNotFound } from './middlewares/routeNotFound';

// ENV
import { SERVER } from './config/config';
import defineRoutes from './modules/route';

// Controllers
import Test from './controllers/test';
import Comments from './controllers/comments';
import Blogs from './controllers/blogs';

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
    defineRoutes([Test, Comments, Blogs], application);

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
