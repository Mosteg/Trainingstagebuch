const { reject, result } = require('lodash');
const mysql = require('mysql2');

class Datenbank {
    constructor() {
        
    }

    user(id, password, email, user_name, first_name, last_name, created_at) {
        return {id, password, email, user_name, first_name, last_name, created_at};
    }
    createUser(password, email, user_name, first_name, last_name) {
        return {password, email, user_name, first_name, last_name};
    }

    #createConnection() {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '20_Nuka_19',
            database: 'trainingstagebuch'
        });
    }

    async getUserByEmail(email, password) {
        const conection = this.#createConnection();
        return new Promise((resolve, reject) => {
            conection.query('select * from users where email = ? and password = ?', [email, password], (err, result, fields) => {
                if(err) reject(err);
                else resolve(result, fields);
            });
            conection.end();
        })
    };

    async getUserByUsername(username, password) {
        const conection = this.#createConnection();
        return new Promise((resolve, reject) => {
            conection.query('select * from users where user_name = ? and password = ?', [username, password], (err, result, fields) => {
                if(err) reject(err);
                else resolve(result, fields);
            });
            conection.end();
        });
    };

    async getWorkoutsByUserId(id) {
        const conection = this.#createConnection();
        const sql = 'select w.id as workoutID, timestamp, repetitions, e.name as exercises, description, e.id as exerciseId from workouts w, workout_exercises we, exercises e where w.id = we.workout_id and e.id = we.exercise_id and w.user_id = ?';
        return new Promise((resolve, reject) => {
            conection.query(sql, [id], (err, result, fields) => {
                if(err) reject(err);
                else resolve(result, fields);
            });
            conection.end();
        });
    }

    async createAccount(user) {
        const conection = this.#createConnection();
        return new Promise((resolve, reject) => {
            conection.query('insert into users set ?', user, (err, result) => {
                if(err) reject(err);
                else resolve(result);
            });
            conection.end();
        });
        
    }

    










}




module.exports = Datenbank;

