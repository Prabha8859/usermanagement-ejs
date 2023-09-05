const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    gender:String,
    status:String
},{ //line extra
    timestamps: true , 
    versionKey: false,
    timezone: 'Asia/Kolkata'
  });

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;