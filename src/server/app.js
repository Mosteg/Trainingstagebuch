require('dotenv').config();
const {generateNewSecretKey, updateEnvFile} = require('./updateJWT-Secret');
const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('../../routes/routes')
const apiRoutes = require('../../routes/apiRouts')

const app = express();
const server = app.listen(3000);


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.use('/', routes);
app.use('/api', apiRoutes);
app.use((req, res) => res.status(404).render('404'));
