const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    firstName : {type:String},
    LastName : {type:String},
    email : {type:String},
    phone : {type:String},
    Password : {type:String},
    businessName : {type:String},
    entryDate: {type:Date, default:Date.now}
})

const Users = mongoose.model('Users', userSchema, 'users')
const mySchemas = {'Users': Users}


module.exports = mySchemas