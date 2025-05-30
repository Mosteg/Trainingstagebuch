const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

class Datenbank {
    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 5,
            queueLimit: 0,
        });
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

    async getUserById(id) {
        try {
            const sql = 'select * from users where id = ?';
            const [rows] = await this.pool.execute(sql, [id]);

            if(rows.length === 0) return new Error('User not found');

            return rows[0];
        }
        catch(error) {
            throw error;
        }
    } 

    async getPublicUserDataById(id) {
        try {
            const sql = 'select id, user_name, profile_picture from users where id = ?';
            const [rows] = await this.pool.execute(sql, [id]);

            if(rows.length === 0) return new Error('User not found');

            return rows[0];
        }
        catch(error) {
            throw error;
        }
    }
    
    async createAccount(user) {
        try {
            user.password = await bcrypt.hash(user.password, 14);
            const sql = 'insert into users set ?';
            const [result] = await this.pool.query(sql, user);

            return await this.getUserById(result.insertId);

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

    async getWorkoutsByUserId(id) {
        try {
            const sql = 
                'select workout_id, timestamp, notes, repetitions, exercise_id ' +
                'from workouts w ' +
                'join workout_exercises we on w.id = we.workout_id ' +
                'where w.user_id = ? ' +
                'order by w.id';
            return (await this.pool.query(sql, [id]))[0];
        }
        catch(error) {
            return error;
        } 
    }

    async getChallengeDataByUserId(id, timeframe) {
        let sqlSnippet;
        switch(timeframe) {
            case 'thisWeek': sqlSnippet = 'and YEARWEEK(w.timestamp, 1) = YEARWEEK(CURDATE(), 1) '; break
            case 'week': sqlSnippet = 'and now() - interval 1 week < w.timestamp '; break;
            case 'month': sqlSnippet = 'and now() - interval 1 month < w.timestamp '; break;
            case 'year': sqlSnippet = 'and now() - interval 1 year < w.timestamp '; break;
            case 'start': sqlSnippet = 'and c.created_at < w.timestamp '; break;
            case 'every': sqlSnippet = ''; break;
            default: sqlSnippet = 'and YEARWEEK(w.timestamp, 1) = YEARWEEK(CURDATE(), 1) '; break;
        }

        try {
            const sql = 
                'SELECT \'exercise Ids:\' AS id, c.exercise1_id AS exercise1, c.exercise2_id AS exercise2, c.exercise3_id AS exercise3 ' +
                'FROM challenges c ' +
                'INNER JOIN users u ON u.challenge_id = c.id ' +
                'WHERE u.id = ? ' +

                'UNION ' +

                'SELECT ' + 
                    'u.id, ' +
                    'IFNULL(SUM(CASE WHEN we.exercise_id = c.exercise1_id THEN we.repetitions ELSE 0 END), 0) AS exercise1_reps, ' +
                    'IFNULL(SUM(CASE WHEN we.exercise_id = c.exercise2_id THEN we.repetitions ELSE 0 END), 0) AS exercise2_reps, ' +
                    'IFNULL(SUM(CASE WHEN we.exercise_id = c.exercise3_id THEN we.repetitions ELSE 0 END), 0) AS exercise3_reps ' +
                'FROM users u ' +
                'INNER JOIN challenges c ON u.challenge_id = c.id ' +
                'LEFT JOIN workouts w ON u.id = w.user_id ' + sqlSnippet +
                'LEFT JOIN workout_exercises we ON w.id = we.workout_id AND we.exercise_id IN (c.exercise1_id, c.exercise2_id, c.exercise3_id) ' +
                'WHERE u.challenge_id = (SELECT challenge_id FROM users WHERE id = ?) ' +
                'GROUP BY u.id;';
            return (await this.pool.query(sql, [id, id]))[0];
        }
        catch(error) {
            return error;
        }
    }

    async createWorkoutWithUserId(id, notes = '') {
        try {
            const sql = 
                'insert into workouts (user_id, notes) ' +
                'values (?, ?)';
            return await this.pool.query(sql, [id, notes]);
        }
        catch(error) {
            throw error;
        }
    }

    async addExercisesToWorkoutWithId(workout_id, exercises) {
        let data = exercises.map(exercise => [workout_id, ...exercise]);
        try {
            const sql = 
                'insert into workout_exercises (workout_id, exercise_id, repetitions) ' +
                'values ?';
            return await this.pool.query(sql, [data]);
        }
        catch(error) {
            throw error;
        }
    }

    async createExercise(name, description) {
        try {
            const sql = 
                'insert into exercises set ?';
            return await this.pool.query(sql, {name, description});
        }
        catch(error) {
            throw error;
        }
    }

    async getExercisesList() {
        try {
            const sql = 'select * from exercises';
            return await this.pool.query(sql);
        }
        catch(error) {
            throw error;
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

