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



// const Datenbank = require('../../models/datenbank');
// db = new Datenbank();

// db.getChallengeDataByUserId(231, 'thisWeek')
// .then(response => console.log(response))
// .catch(err => console.log(err));

// const Workout = require('../../public/objects/workout');
// const Exercise = require('../../public/objects/exercise');


// db.getWorkoutsByUserId(1).then(response => {
//     let workouts = [];
//     response.forEach(data => {
//         const workout = workouts[workouts.length - 1];
//         if(workouts[0] === undefined || workout.workout_id !== data.workout_id) {
//             workouts.push(new Workout(data.workout_id, data.timestamp, new Exercise(data.exercise_id, data.exercise, data.description, data.repetitions)))
//         }
//         else if(workout.workout_id === data.workout_id) {
//             workout.addExercise(new Exercise(data.exercise_id, data.exercise, data.description, data.repetitions))
//         }
//     });
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