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
        if(err) {
            res.status(500).json({message: err});
            return;
        }

        res.status(200).json({message: "Contact was created successfully!"})
    })
}