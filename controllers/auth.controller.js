const db = require('../models');
const User = db.user;

var bcrypt = require('bcrypt');


exports.register = (req, res) => {
    const {
        email,
        password
    } = req.body

    const user = new User({
        email,
        password: bcrypt.hashSync(password, 8)
    })

    user.save(err => {
        if (err) {
            res.status(500).json({
                message: err
            })
        }

        res.status(200).json({
            message: "User has been registered successfully!"
        });
    })
}