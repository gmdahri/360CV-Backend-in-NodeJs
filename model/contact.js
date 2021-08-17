const mongoose = require ('mongoose');
require('mongoose-type-email');

const Schema = mongoose.Schema;
const email= mongoose.SchemaTypes.Email;
const contactSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
         type: email,
        //     work: mongoose.SchemaTypes.Email,
        //     home: mongoose.SchemaTypes.Email
        
      
    },
    subject:{
        type: String, 
        required: true
    },
    message:{
        type: String,
        required: true
    },
},{
   timestamps: true 
});

var Contacts = mongoose.model('Contact', contactSchema);
module.exports = Contacts;