const sql = require('mysql');
const express = require('express');
const app = express();
const port = 8383

app.use(express.static('public'))
app.use(express.json())

app.get('/info' , (req,res)=> {
    res.status(200).json({info: 'preset'});
})
app.listen(port, ()=> console.log(`server has started at :${port}`) )

var connection = sql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Auctions',
        port: 3000
    }
);

app.post('/' , (req,res)=>{
    const { parcel } = req.body
    console.log(parcel)

    if(!parcel){
        return res.status(400).send({status: 'failed'})
    }

    res.status(200).send({status: 'recieved'})
})

connection.connect(function(err){

    if(err) throw err;
    console.log("Database connected");
})