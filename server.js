const express = require('express')
const mongoose = require('mongoose')
const app = express()
const UserRoutes = require('./Routes/UserRoutes')
const cors = require('cors')
require('dotenv').config()


mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection errr:'));
db.once('open',function(){
    console.log("Connected successfully");
});

app.use(cors())
app.use(express.json())

app.use('/user',UserRoutes)

app.listen(process.env.PORT || 3000,() =>{
    console.log("Server Running Successfully")
})