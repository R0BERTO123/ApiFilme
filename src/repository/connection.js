import mysql from "mysql2/promise"



let con= await mysql.createConnection({

    host: process.env.MYSQL_HOST,
    user:"root",
    password:'1234',
    database:"filmes"

})

console.log("conectou")

export default con


