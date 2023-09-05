
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require("path");
const  app = express();
const connectDB = require('./server/database/connection');
const bodyParser = require('body-parser')


dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080
// log requests
app.use(morgan('tiny'));



//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
// app.set("view",path.resolve{__dirname,"view/ejs"}})

// load assets 
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use(express.json());

app.use(bodyParser.json())

app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=>{
    // mongodb connnection
    connectDB();
    console.log(`Server is runing on http://localhost:${PORT}`)

});