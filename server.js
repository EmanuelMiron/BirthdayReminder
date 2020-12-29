const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const dbConfig = require('./config/db.config');
const {
    HOST,
    DB_PORT,
    DB_NAME
} = dbConfig;
const db = require('./models');

app.use(express.json());

db.mongoose
    .connect(`mongodb://${HOST}:${DB_PORT}/${DB_NAME}`, {
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

    require('./routes/auth.routes')(app);
    require('./routes/contact.routes')(app);