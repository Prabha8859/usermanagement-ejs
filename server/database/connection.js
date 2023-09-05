const mongoose = require('mongoose');
const connectDB = () =>{
    try{
         mongoose.connect('mongodb://127.0.0.1:27017/online_CRUD',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        });
        console.log(`MongoDB connected:`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB