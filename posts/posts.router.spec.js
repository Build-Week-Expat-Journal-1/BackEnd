const request = require('supertest');
const server = require('../api/server');
const router = require('./posts.router');
const db = require('../data/dbconfig');

describe('get posts functionality', () => {
    it('should retrieve posts from the database', () => {
        const res = request(router)
            .get('/api/posts')
            .then((res) => {
                expect(res.status).toBe(200);
            })    
    })

    it('should return JSON', () => {
        const res =  request(router)
            .get('/api/posts')
            .then((res) => {
            expect(res.type).toMatch(/json/i);
        });
    });
});

describe('get posts by id functionality', () => {
    it('should return status 200', () => {
        const res = request(router)
            .get('/api/posts/:id')
            .then((res) => {
                expect(res.status).toBe(200);
            });
    })
    it('should return status 404', () => {
        const res = request(router)
            .get('/api/posts/:id')
            .send({
                id: 1000
            })
            .then((res) => {
                expect(res.status).toBe(404);
            });
    })
});

describe('create posts functionality', () => {
    it('should return status 201', () => {
        const res = request(router)
            .post("/")
            .send({
                category: "Peru",
                story: "My visit to Machu Pichu was amazing."
            })
            .then((res) => {
                expect(res.status).toBe(201);
            });
    });

    it('should return status 400', () => {
        const res = request(router)
            .post("/")
            .then((res) => {
                expect(res.status).toBe(400);
            });
    });
});

describe('delete posts functionality', () => {
    it('should return status 200', () => {
        const res = request(router)
            .post("/:id")
            .send({
                id: 3,
            })
            .then((res) => {
                expect(res.status).toBe(200);
            });
    });
});


describe('update posts functionality', () => {
    it('should return status 200', () => {
        const res = request(router)
            .post("/:id")
            .send({
                id: 3,
                category: "Paris",
                story: "I saw the Eiffel Tower for the first time this week."
            })
            .then((res) => {
                expect(res.status).toBe(200);
            });
    });
});