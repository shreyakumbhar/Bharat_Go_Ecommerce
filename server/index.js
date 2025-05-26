const express = require('express')
const app = express();





const PORT = process.env.PORT || 5000;
const HOST = '127.0.0.1';


// allow cors origin
var cors = require('cors')
app.use(cors())


// 

app.use(express.urlencoded({ extended: true }))

// json data parse
app.use(express.json())







var productsRoutes = require('./routes/productsRoutes')
app.use('/api', productsRoutes)






app.get('/', (req, res) => {

    // return res.status(200).send("<h1>Server Us Up</h1>")

    return res.status(200).json({ message: 'Server is running ...' })
})




app.listen(PORT, HOST, () => {
    console.log("Server is Running.....")
})


