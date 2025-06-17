const request = require('supertest');
const app = require('./main');

describe('GET /hello', () => {
    it('should return hello world', async () => {
        const response = await request(app).get('/hello');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});

describe('POST /add', () => {
    it('should return sum of two numbers', async () => {
        const response = await request(app)
            .post('/add')
            .send({ a: 5, b: 10 });
        expect(response.statusCode).toBe(200);
        expect(response.body.sum).toBe(15);
    });

    it('should return error if a is not a number', async () => {
        const response = await request(app)
            .post('/add')
            .send({ a: 'five', b: 10 });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('a must be a number');
    });

    it('should return error if b is not a number', async () => {
        const response = await request(app)
            .post('/add')
            .send({ a: 5, b: 'ten' });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('b must be a number');
    });
});
