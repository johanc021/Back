import { expect } from 'chai';
import supertest from 'supertest';
import { cookie } from './sessions.router.test.js';

const requester = supertest('http://localhost:8080');

const user = '6522ef245c7edb3ca4011682'

describe('Users Routes', () => {
    it('[PUT] /api/user/:uid update a users role', async () => {
        const updatedUserData = {
            role: 'admin'
        };

        const response = await requester.put(`/api/user/${user}`)
            .set('cookie', [`${cookie}`])
            .send(updatedUserData);

        expect(response.status).to.equal(200);
    });
});