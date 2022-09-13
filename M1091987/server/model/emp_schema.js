const mongoose=require('mongoose');

var emp_schema =new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    
    gender: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    leave:{
        type: String,
        required: true

    }
})

const User = mongoose.model("USERBASE", userSchema);

module.exports = User;

