const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema ({
    firstName : {type:String},
    lastName : {type:String},
    email : {type:String},
    phone : {type:String},
    password : {type:String},
    businessName : {type:String},
    businessLocation : {type:String},
    entryDate: {type:Date, default:Date.now}
})


module.exports = mongoose.model('Users', userSchema, 'users')