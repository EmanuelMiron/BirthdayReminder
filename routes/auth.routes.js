const controllers = require('../controllers/auth.controller');

module.exports = app => {
    app.post("/api/auth/register",
        controllers.register
    )
}