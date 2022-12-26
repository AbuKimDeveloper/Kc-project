const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non specifiq'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    pictureLink: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
    },
    interestId: {
        type: [mongoose.Types.ObjectId],
        ref: "IntrestModel"
    },


})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;