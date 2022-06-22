const mysql = require('mysql2');
const { dbHost, dbPort, dbUser, dbPassword, dbName } = require('../config')

const connection = mysql.createConnection({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName
})

async function query(sql,data){
    try {
        const result = await queryPromise(sql,data)
        return {
            success:true,
            result
        }
    } catch (error) {
        return {
            success:false,
            message:error.message
        }
    }
}

function queryPromise(sql,data){
    return new Promise(function(resolve, reject){
        connection.query(sql,data,function(err, res, fields){
            if(err!=null){
                
                console.log(err)
                
                return reject({
                    err:true,
                    message: err.sqlMessage
                })
            }else{
                return resolve(res)
            }
        })
    })
    //return miPromesa
}

//exportaciones
module.exports = {
    connection,
    query
}