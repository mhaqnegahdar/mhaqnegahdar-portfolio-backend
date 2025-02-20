// test/units/controllers/test.test.ts
import { expect, it, describe} from 'bun:test';
import request from 'supertest';
import { application, ShutDown } from '../../../src/server';

describe('Test Controller', () => {
   

    it('Starts and has proper Test environment', () => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(application).toBeDefined();
    }),
        1000;

    it('should return a 200 response with a message for GET /test/get', async () => {
        const res = await request(application).get('/test/get');

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Test Route Is Working :)');
    });

    it('should return a 200 response with a message and body for POST /post', async () => {
        const res = await request(application).post('/test/post');

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Post Test Route Is Working :)');
    });
});
