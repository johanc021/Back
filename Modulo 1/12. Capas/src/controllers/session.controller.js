import SessionsService from '../services/session.service.js';

class SessionsController {
    async register(req, res, next) {
        await SessionsService.register(req, res, next);
    }

    async login(req, res) {
        await SessionsService.login(req, res);
    }

    async resetPassword(req, res) {
        await SessionsService.resetPassword(req, res);
    }

    async logout(req, res) {
        await SessionsService.logout(req, res);
    }
}

export default new SessionsController();
