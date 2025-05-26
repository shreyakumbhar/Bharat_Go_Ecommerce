const express = require('express')
const router = express.Router()

// import db connection
const connection = require('../config/db')

router.get('/', (req, res) => {
    return res.status(200).json({ message: 'API Calling.....' })
})


router.get('/getproducts',async (req,res)=>
{  try {

       

        var sql = 'select * from products';

       const result= await connection.execute(sql);
        return res.status(201).json({ message: 'all products fetched Successfully',data:result[0],success:true})

    } catch (err) {

        console.log(err)
        return res.status(500).json({ message: 'Internal Server error' })
    }
   

})


router.delete('/getprodudctsDetails/:id', async (req, res) => {
    try {

        var id = req.params.id;
        const sql = `select *  from products where id='${id}'`;
        await connection.execute(sql);

        return res.status(200).json({ message: 'product data fetched Successfully', success: true })

    } catch (err) {

        console.log(err)
        res.status(500).json({ message: 'Internal Server Error', success: false })
    }
})


module.exports=router