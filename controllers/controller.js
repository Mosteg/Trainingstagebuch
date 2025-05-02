const db = require('../models/datenbank');

const index = (req, res) => {
    res.render('index');
}

const challenge = (req, res) => {
    res.render('challenge');
}


module.exports = {
    index,
    challenge
}