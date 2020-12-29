const db = require('../models');
const User = db.user;

exports.verifyRegister = (req, res, next) => {

    // Check if the email is already in our database
    User
        .findOne({
            email: req.body.email
        })
        .exec((err, user) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
                return;
            }

            if (user) {
                res.status(400).json({
                    message: "Email is already taken!"
                })
                return;
            }

            next();
        })
}