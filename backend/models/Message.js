import mongoose from "mongoose";

const { Schema } = mongoose;

const MessageSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
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