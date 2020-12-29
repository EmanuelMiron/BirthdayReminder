const mongoose = require('mongoose');

const db = {};

db.mongoose = mongoose;
db.user = require('./user.model');
db.contact = require('./contact.model');

module.exports = db;