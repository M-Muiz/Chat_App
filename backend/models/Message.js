import mongoose from "mongoose";

const { Schema } = mongoose;

const MessageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: Schema.Types.String,
        required: true,
    }
},
    { timestamps: true }
);

const Message = mongoose.model('Message', MessageSchema);

export default Message;