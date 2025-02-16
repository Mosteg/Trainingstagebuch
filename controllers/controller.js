const db = require('../models/datenbank');

const index = (req, res) => {
    res.render('index');
}

module.exports = {
    index
}