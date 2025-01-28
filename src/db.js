import { createPool } from 'mysql';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '20_Nuka_19',
    database: 'trainingstagebuch'
});


pool.query(`select * from trainingstagebuch.user`, (err, res) => {
    return console.log(res)
})