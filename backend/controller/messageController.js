import Message from "../models/Message.js"
import Conversation from "../models/Converstaion.js"


export const sendMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;
        console.log(senderId)
        console.log(receiverId)
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        };

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        };

        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(200).json(newMessage);

    } catch (error) {
        res.status(500).send("something went wrong");
    }
};


export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        console.log(userToChatId)
        console.log(senderId)

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        if (!conversation) return res.status(200).send([]);

        const messages = conversation.messages;

        res.status(200).send({
            messages
        });

    } catch (error) {
        console.log(error)
        res.status(500).send("something went wrong");
    }
};