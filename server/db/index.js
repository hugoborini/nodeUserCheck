const mysql = require('mysql');



const pool = mysql.createPool({
    connectionLimit: 10,

    password:'hf42cfz9nrjsutz4',
    //password: '85f492cb',
    user:'p2ngs92p1xslerl8', 
    //user: 'b97f3258966740',
    database:'f3wk4v7xhp93tzfu', 
    //database: 'heroku_f34a090512b90f6',
    host:'d6rii63wp64rsfb5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    //host: 'eu-cdbr-west-03.cleardb.net',
    port: 3306,
    //port: 3306

});


let coursedb = {};

coursedb.all = ()=>{
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM user', (err, results) => {
            if (err){
                return reject(err);
            }
            return resolve (results);
        });
    });
};

module.exports = coursedb;