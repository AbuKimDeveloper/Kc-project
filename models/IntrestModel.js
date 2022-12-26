const mongoose = require("mongoose");

const intrestSchema = new mongoose.Schema({
    intrest: {
        type: [String],
        required: true,
        unique: true,
    },
})

const intrestModel = new mongoose.Model("Intrest", intrestSchema);
module.exports = intrestModel;