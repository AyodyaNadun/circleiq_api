 const mongoose = require("mongoose");
 const Scheme = mongoose.Schema

 const userSchema = new Scheme({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: 1000
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        maxlength: 1000
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        maxlength: 1000
    },
    contact: {
        type: String,
        required: [true, 'Contact is required'],
        maxlength: 10
    }
 });

 module.exports = mongoose.model('Users', userSchema);