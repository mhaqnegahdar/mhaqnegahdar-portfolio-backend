import { describe, it, expect, spyOn } from 'bun:test';

describe('logging.log', () => {
    it('logs a message', () => {
        const logSpy = spyOn(logging, 'log');
        logging.log('Hello, world!');
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('Hello, world!');
    });
});

describe('logging.info', () => {
    it('logs an info message', () => {
        const logSpy = spyOn(logging, 'info');
        logging.info('Hello, world!');
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('Hello, world!');
    });
});

describe('logging.error', () => {
    it('logs an error message', () => {
        const logSpy = spyOn(logging, 'error');
        logging.error('Hello, world!');
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('Hello, world!');
    });
});

describe('logging.warning', () => {
    it('logs an warning message', () => {
        const logSpy = spyOn(logging, 'warning');
        logging.warning('Hello, world!');
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('Hello, world!');
    });
});

describe('logging.warn', () => {
    it('logs an warn message', () => {
        const logSpy = spyOn(logging, 'warn');
        logging.warn('Hello, world!');
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('Hello, world!');
    });
});
