const Datenbank = require('../models/datenbank');
const db = new Datenbank();

const getUserByEmail = (req, res) => {
    const {name, password} = req.body;
    db.getUserByEmail(name, password)
    .then(user => {
        if(!user) res.status(404).json({error: "Passwort oder Nutzername falsch"});
        else res.json(user);
    })
    .catch(err => console.log(err));
}

const getUserByUsername = (req, res) => {
    const {name, password} = req.body;
    db.getUserByUsername(name, password)
    .then(user => {
        if(!user) res.status(404).json({error: 'Passwort oder Nutzername falsch'});
        else res.json(user);
    })
    .catch(err => console.log(err));
}

const createAccount = (req, res) => {
    const user = req.body;
    db.createAccount(user)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(err.statusCode).json({error: err.message})
        console.log(err.message);
    })
}




module.exports = {
    getUserByEmail,
    getUserByUsername,
    createAccount
}