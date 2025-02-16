const express = require('express');
const routes = require('../../routes/routes')
const apiRoutes = require('../../routes/apiRouts')

const Datenbank = require('../../models/datenbank');
db = new Datenbank();
let user;

const app = express();
const server = app.listen(3000);


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());


app.use('/', routes);
app.use('/api', apiRoutes);
app.use((req, res) => {
    res.status(404).render('404');
});



// db.getWorkoutsByUserId(1).then((result, fields) => {
//     if(result[0] === undefined) throw new Error('Passwort oder Username falsch');
//     else {
//         console.log(result, fields);  
//     }
// }).catch(err => {
//     console.log(err);
// });

// db.createAccount(db.createUser('12345', 'test4@gmail.com', 'Test4', 'test', 'test')).then((result) => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });

// db.getUserByEmail('test2@gmail.com', '12345').then((result, fields) => {
//     if(result[0] === undefined) throw new Error('Passwort oder Username falsch');
//     else {
//         user = result[0];
//         console.log(user);  
//     }
// }).catch(err => {
//     console.log(err);
// });



// für zugriff von extern, port muss freigegeben werden
// app.listen(3000, '0.0.0.0', () => {

// });