const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

class Datenbank {
    constructor() {
        this.pool = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "20_Nuka_19",
            database: "trainingstagebuch",
            waitForConnections: true,
            connectionLimit: 5,
            queueLimit: 0,
        });
    }

    user(id, password, email, user_name, first_name, last_name, created_at) {
        return {id, password, email, user_name, first_name, last_name, created_at};
    }
    createUser(password, email, user_name, first_name, last_name) {
        return {password, email, user_name, first_name, last_name};
    }

    async getUserByEmail(email, password) {
        try{
            const sql = 'select * from users where email = ?';
            const [rows] = await this.pool.execute(sql, [email]);

            if(rows.length === 0) return null;

            const user = rows[0];
            const match = await bcrypt.compare(password, user.password);
            return match ? user : null;
        }
        catch(error) {
            throw error;
        }
    };

    async getUserByUsername(username, password) {
        try {
            const sql = 'select * from users where user_name = ?';
            const [rows] = await this.pool.execute(sql, [username]);

            if(rows.length === 0) return null;

            const user = rows[0];
            const match = await bcrypt.compare(password, user.password);
            return match ? user : null;
        }
        catch(error) {
            throw error;
        }
    };

    async #getUserById(id) {
        try {
            const sql = 'select * from users where id = ?';
            const [rows] = await this.pool.execute(sql, [id]);

            if(rows.length === 0) return null;

            return rows[0];
        }
        catch(error) {
            throw error;
        }
    }

    async getWorkoutsByUserId(id) {
        try {
            const sql = 
                "select w.id as workoutID, timestamp, repetitions, e.name as exercises, description, e.id as exerciseId " +
                "from workouts w " +
                "join workout_exercises we on w.id = we.workout_id " +
                "join exercises e on e.id = we.exercise_id " +
                "where w.user_id = ?";
            return (await this.pool.execute(sql, [id]))[0];
        }
        catch(error) {
            throw error;
        }
        
    }

    async createAccount(user) {
        try {
            user.password = await bcrypt.hash(user.password, 10);
            const sql = 'insert into users set ?';
            const [result] = await this.pool.query(sql, user);

            return await this.#getUserById(result.insertId);

        }
        catch(error) {
            if(error.code === 'ER_DUP_ENTRY') {
                if(error.sqlMessage.includes('users.username_UNIQUE')) {
                    throw new dbError('Username ist schon vorhanden', 409, {field: "user_name"});
                }
                if(error.sqlMessage.includes('users.email_UNIQUE')){
                    throw new dbError('Email ist schon vorhanden', 409, {field: "email"});
                }
            }
            else {
                console.log(error);
                throw new dbError('Unknown db error', 500);  
            }
        }
    }

    async shutdown() {
        await this.pool.end();
        console.log('Datenbankverbindung geschlossen');
    }

    

}

class dbError extends Error {
    constructor(message, statusCode, details = {}) {
        super(message); // Setzt die Standard-Error-Message
        this.name = this.constructor.name; // Setzt den Namen der Fehlerklasse
        this.statusCode = statusCode; // Eigene Eigenschaft für den Statuscode
        this.details = details; // Zusätzliche Infos (z. B. welche Felder betroffen sind)
        Error.captureStackTrace(this, this.constructor); // Stack-Trace korrekt setzen
    }
}

module.exports = Datenbank;

