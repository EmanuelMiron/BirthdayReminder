const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


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

exports.login = (req, res) => {
    const {
        email,
        password
    } = req.body;

    User
        .findOne({
            email
        })
        .exec((err, user) => {
            if (err) {
                res.status(500).json({
                    message: err
                });
                return;
            }

            if (!user) {
                res.status(404).json({
                    message: "User not found!"
                });
                return;
            }

            const passwordIsValid = bcrypt.compareSync(password, user.password);

            if (!passwordIsValid) {
                res.status(401).json({
                    message: "Incorrect Password",
                    accessToken: null
                })
                return;
            }

            var token = jwt.sign({
                id: user._id
            }, config.secret, {
                expiresIn: 86400 // 24 hours
            })

            res.status(200).json({
                email: user.email,
                accessToken: token
            })

        })
}