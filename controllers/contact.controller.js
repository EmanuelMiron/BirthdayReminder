const db = require('../models');
const Contact = db.contact;

exports.addContact = (req, res) => {
    const newContact = {
        firstName,
        lastName,
        birthday
    } = req.body

    const contact = new Contact(newContact)

    contact.save(err => {
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

            res.status(200).json(contact)
        })
}

exports.getAllContacts = (req, res) => {
    Contact
        .find()
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

            contact.birthday = birthday;
            contact.save()

            res.status(200).json({
                message: "Contact updated successfully!"
            })

        })
}