import Message from "../models/Message.js"
import Conversation from "../models/Converstaion.js"


export const sendMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [receiverId, senderId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: { $all: [receiverId, senderId] }
            })
        };

        const newMessage = Message.create({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        };

        await conversation.save();
        await await newMessage.save();

        res.status(200).json(newMessage);

    } catch (error) {
        res.status(500).send("something went wrong");
    }
};