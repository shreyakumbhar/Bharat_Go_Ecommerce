const mysql = require('mysql2/promise')

const pool = mysql.createPool({

 

        host: "localhost",
    user: "root",
    database: "test",
    password: '',
    port: 3306,
    connectionLimit: 10,

})

const testConnection = async () => {

    try {


        const result = await pool.getConnection();
        // console.log(result)
        console.log("DB Connection Successfully")


    } catch (err) {
        console.log(err)
        console.log("DB Connection Faild")
    }



}

testConnection()


module.exports=pool;