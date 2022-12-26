const mongoose = require("mongoose")

const matchSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "UserModel"
    },
    user2Id: {
        type: {
            type: mongoose.Types.ObjectId,
            ref: "UserModel"
        },
    },
    matchStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
    }
})
const matchModel = new mongoose.Model("Match", matchSchema);
module.exports = matchModel;