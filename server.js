const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;

const dbConfig = require('./config/db.config');
const {
    HOST,
    DB_PORT,
    DB_NAME
} = dbConfig;

mongoose.connect(`mongodb://${HOST}:${DB_PORT}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to the database!")
        app.listen(PORT, () => {
            console.log(`Server started on port:${PORT}`)
        })
    })
    .catch(err => {
        console.error("Error", err);
        process.exit();
    })