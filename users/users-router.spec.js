const request = require('supertest');
const server = require('../api/server');
const router = require('./users-router');

let token;

beforeAll((done) => {
    request(server)
        .post('/api/auth/login')
        .send({
            username: "lambda",
            password: "lambdaschool",
        })
    .end((err, res) => {
        token = res.body.token; // save the token!
        done();
    });
});

describe('List users functionality', () => {
    it('should return a list of users', () => {
        const res = request(router)
            .get("/api/users")
            .then((res) => {
                expect(res.status).toBe(200);
            })    
    });
  
});
