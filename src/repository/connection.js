import mysql from "mysql2/promise"



let con= await mysql.createConnection({

    host: 'localhost',
    user:"root",
    password:'1234',
    database:"filmes"

})

console.log("VAII CARALHOO")

export default con;


