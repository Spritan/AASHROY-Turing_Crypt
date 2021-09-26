const { Schema, model } = require('mongoose')
const {isEmail} = require('validator')

const contributionSchema = new Schema({
    fname : {
        type : String,
        required : true,
    },
    lname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        validate : [isEmail, 'Please enter a valid email']
    },
    streetAddress : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    region : {
        type : String,
        required : true,
    },
    zip : {
        type : Number,
        required : true,
    },
    complaintDetails : {
        type : String,
        required : true,
    },
}, {
    timestamps : true,
});

const Contribution = model("Contribution", contributionSchema);
module.exports = Contribution;
