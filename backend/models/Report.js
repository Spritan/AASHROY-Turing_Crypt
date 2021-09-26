const { Schema, model } = require('mongoose')
const {isEmail} = require('validator')

const reportSchema = new Schema({
    dateOfComplaint : {
        type : Date,
        required : true,
    },
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
        validate : [isEmail, 'Please enter a valid Email']
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
    severity : {
        type : String,
        required : true,
    },
    dateOfIncident : {
        type : Date,
        required : true,
    },
    complaintDetails : {
        type : String,
        required : true,
    },
    desiredOutcome : {
        type : String,
        required : true,
    }
}, {
    timestamps : true,
});

const Report = model("Report", reportSchema);
module.exports = Report;
