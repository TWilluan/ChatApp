import Converstaion from "../models/convers.model.js";
import Message from "../models/message.model.js";

export const send = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params.id;

        const senderId = req.user._id;

        console.log(`senderId: ${senderId}`);

        let conversation = await conversation.findOne({
            participants: { $all: [senderId, recieverId] },
        });

        if (!conversation) {
            conversation = await Converstaion.create({
                participants: [sendderId, recieverId],
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        res.status(201).json({ newMessage });
    } catch (e) {
        console.log(`Error in message controller: ${e}`);
        res.status(500).json({ error: `Interal server error` });
    }
};
