const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 50 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

require('./routes/authroutes')(app);

const PORT = process.env.PORT || 5000;
console.log('server started...');

//view engine setup
app.set('view engine', 'ejs');

app.listen(PORT);