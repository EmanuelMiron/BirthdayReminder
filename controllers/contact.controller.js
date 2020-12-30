const db = require('../models');
const Contact = db.contact;

exports.addContact = (req, res) => {

    const userId = req.user.id;

    const newContact = {
        firstName,
        lastName,
        birthday
    } = req.body;

    newContact.userId = userId;

    new Contact(newContact)
        .save(err => {
            if (err) {
                res.status(500).json({
                    message: err
                });
                return;
            }

            res.status(200).json({
                message: "Contact was created successfully!"
            })
        })
}

exports.getOneContact = (req, res) => {
    const contactId = req.params.id;
    const userId = req.user.id;

    Contact
        .findOne({
            _id: contactId
        })
        .exec((err, contact) => {
            if (err) {
                res.status(500).json({
                    message: err
                });
                return;
            }

            if (!contact) {
                res.status(404).json({
                    message: "Contact not found!"
                });
                return;
            }

            if (contact.userId == userId) {
                res.status(200).json(contact)
            } else {
                res.status(401).json({
                    message: 'Unauthorized!'
                });
                return;
            }
        })
}

exports.getAllContacts = (req, res) => {
    const userId = req.user.id;

    Contact
        .find({
            userId
        })
        .exec((err, contacts) => {
            if (err) {
                res.status(500).json({
                    message: err
                });
                return;
            }

            res.status(200).json(contacts)
        })
}

exports.updateContact = (req, res) => {
    const contactId = req.params.id;
    const userId = req.user.id;

    const {
        birthday
    } = req.body

    Contact
        .findOne({
            _id: contactId
        })
        .exec((err, contact) => {
            if (err) {
                res.status(500).json({
                    message: err
                });
                return;
            }

            if (!contact) {
                res.status(404).json({
                    message: "Contact not found!"
                });
                return;
            }

            if (contact.userId == userId) {

                contact.birthday = birthday;
                contact.save()

                res.status(200).json({
                    message: "Contact updated successfully!"
                })
            } else {
                res.status(401).json({
                    message: "Unauthorized!"
                });
                return;
            }

        })
}

exports.deleteContact = (req, res) => {
    const contactId = req.params.id;
    const userId = req.user.id;

    Contact
        .findById(contactId)
        .exec((err, contact) => {
            if (err) {
                res.status(500).json({
                    message: err
                });
                return;
            }

            if (contact == undefined) {
                res.status(404).json({
                    message: "Contact not found!"
                });
                return;
            }

            if (contact.userId == userId) {

                Contact
                    .findByIdAndDelete(contactId)
                    .exec(err => {
                        if (err) {
                            res.status(500).json({
                                message: err
                            });
                            return;
                        }

                        res.status(200).json({
                            message: "Contact was deleted successfully!"
                        });
                    })
            } else {
                res.status(401).json({
                    message: "Unauthorized!"
                });
                return;
            }
        })

}