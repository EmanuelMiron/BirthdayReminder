const mongoose = require('mongoose');

const ContactSchema = {
    firstName: String,
    lastName: String,
    birthday: String
}

const Contact = mongoose.model(
    "Contact",
    mongoose.Schema(ContactSchema)
)

module.exports = Contact;