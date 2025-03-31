const Datenbank = require('../models/datenbank');
const Workout = require('../public/objects/workout');
const jwt = require('jsonwebtoken');

const db = new Datenbank();

const createAccount = (req, res) => {
    const user = req.body;
    db.createAccount(user)
    .then(user => {
        createAuthToken(user, res).status(201).send({message: 'Account erstellt'});
    })
    .catch(err => {
        res.status(err.statusCode).json({error: err.message})
        console.log(err.message);
    })
}

const getUserById = (req, res) => {
    const {user_id} = req.user;
    db.getUserById(user_id)
    .then(user => res.json(user))
    .catch(err => res.status(404).send({error: err.message}));
}

const login = (req, res) => {
    const {name, password} = req.body;
    
    if(isEmail(name)) {
        db.getUserByEmail(name, password)
        .then(user => {
            if(!user) res.status(404).json({error: 'Passwort oder Email falsch'});
            else createAuthToken(user, res).send({message: 'Login erfolgreich'});
        })
        .catch(err => console.log(err));
    }
    else {
        db.getUserByUsername(name, password)
        .then(user => {
            if(!user) res.status(404).json({error: 'Passwort oder Nutzername falsch'});
            else createAuthToken(user, res).send({message: 'Login erfolgreich'});
        })
        .catch(err => console.log(err));
    }    
}

const logout = (req, res) => {
    res.clearCookie('authToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    });
    res.send({message: 'Logout erfolgreich'});
}

const checkAuthStatus = (req, res) => {
    res.send({message: 'Angemeldet'});
}

const verifyAuthToken = (req, res, next) => {
    const token = req.cookies.authToken;

    if(!token) return res.status(401).send({error: 'Nicht authentifiziert'});

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return res.status(403).send({error: 'Token ungültig'});
        
        req.user = decoded;
        next();
    })
}

const createAuthToken = (user, res) => {
    const token = jwt.sign({user_id: user.id}, process.env.JWT_SECRET, {expiresIn: '0.1h'})

    res.cookie('authToken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 600000
    });

    return res;
}


const getWorkoutsByUserId = (req, res) => {
    const {user_id} = req.user;

    db.getWorkoutsByUserId(user_id)
    .then(response => {
        let workouts = [];
        response.forEach(data => {
            const workout = workouts[workouts.length - 1];
            if(workouts[0] === undefined || workout.workout_id !== data.workout_id) {
                workouts.push(new Workout(data.workout_id, data.timestamp, data.notes, [data.exercise_id, [data.repetitions]]))
            }
            else if(workout.workout_id === data.workout_id) {
                workout.addExercise([data.exercise_id, [data.repetitions]])
            }
        });
        res.json(workouts);
    })
    .catch(err => console.log(err));
}

const createWorkout = (req, res) => {
    const {user_id} = req.user;
    const {exercises} = req.body;

    let workout_id;
    db.createWorkoutWithUserId(user_id)
    .then(response => db.addExercisesToWorkoutWithId((workout_id = response[0].insertId), exercises))
    .then(response => {
        res.status(201).json(workout_id);
        //sollte vlt. noch das gesamte workout zurück geben
    })
    .catch(err => console.log(err));
}

const getExercisesList = (req, res) => {
    db.getExercisesList()
    .then(response => res.json(response[0]))
    .catch(err => console.log(err));
}

const getChallengeDataByUserId = (req, res) => {
    const {user_id} = req.user;
    db.getChallengeDataByUserId(user_id, req.query.timeframe)
    .then(response => res.json(response))
    .catch(err => console.log(err));
    
}

const isEmail = input => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}

module.exports = {
    login, 
    logout,
    createAccount,
    checkAuthStatus,
    getUserById,
    getWorkoutsByUserId,
    createWorkout,
    getExercisesList,
    verifyAuthToken,
    getChallengeDataByUserId
}