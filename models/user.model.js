const mongoose = require('mongoose');

const UserSchema = {
    email: String,
    password: String
}

const User = mongoose.model(
    "User",
    mongoose.Schema(UserSchema)
)

module.exports = User;