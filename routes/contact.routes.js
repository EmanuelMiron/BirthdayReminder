const controllers = require('../controllers/contact.controller');

module.exports = app => {
    app.post(
        "/api/contacts/addContact",
        controllers.addContact
    )
}