const controllers = require('../controllers/auth.controller');
const middlewares = require('../middlewares/verifyRegister');

module.exports = app => {
    app.post("/api/auth/register",
        middlewares.verifyRegister,
        controllers.register
    )
}