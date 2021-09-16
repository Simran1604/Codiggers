const mongoose= require('mongoose');

const userdata= new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    StudentEmail:{
        type : String,
        required: true
    },
    studentID:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
    rePassword:{
        type : String,
        required: true
    }
})

const User= mongoose.model('users',userdata);

module.exports=User;