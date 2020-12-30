const controllers = require('../controllers/contact.controller');
const middlewares = require('../middlewares/verifyToken');

module.exports = app => {
    app.post(
        "/api/contacts/addContact",
        middlewares.verifyToken,
        controllers.addContact
    )

    app.get(
        "/api/contact/:id",
        middlewares.verifyToken,
        controllers.getOneContact
    )

    app.get(
        "/api/contacts",
        middlewares.verifyToken,
        controllers.getAllContacts
    )

    app.put(
        "/api/contact/:id",
        middlewares.verifyToken,
        controllers.updateContact
    )

    app.delete(
        "/api/contact/:id",
        middlewares.verifyToken,
        controllers.deleteContact
    )
}