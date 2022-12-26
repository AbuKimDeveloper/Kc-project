const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    MatchId: {
        type: mongoose.Types.ObjectId,
        ref: "MatchModel"
    },
    SenderId: {
        type: mongoose.Types.ObjectId,
        ref: "UserModel"
    },
    RecieverId: {
        type: mongoose.Types.ObjectId,
        ref: "UserModel"
    },
    messageText: {
        type: [String],
        timestamps: true,
    },
    timestamps: true,
})

const messagesModel = new mongoose.Model("Messages", messageSchema);
module.exports = messagesModel;