const controllers = require('../controllers/contact.controller');

module.exports = app => {
    app.post(
        "/api/contacts/addContact",
        controllers.addContact
    )

    app.get(
        "/api/contact/:id",
        controllers.getOneContact
    )

    app.get(
        "/api/contacts",
        controllers.getAllContacts
    )

    app.put(
        "/api/contact/:id",
        controllers.updateContact
    )

    app.delete(
        "/api/contact/:id",
        controllers.deleteContact
    )
}