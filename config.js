const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "test1",
    port: "8080"
});
// console.log("mysqlConnection",mysqlConnection)
mysqlConnection.connect((err) => {
    if (err) {
        return console.log("err", err)
    }
    else {
        return console.log("Connected")
    }
});

module.exports=mysqlConnection;