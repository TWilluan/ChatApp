import Converstaion from "../models/convers.model.js";
import Message from "../models/message.model.js";

export const send = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Converstaion.findOne({
            participants: { $all: [senderId, recieverId] },
        });

        if (!conversation) {
            // check if conversation is created of not
            conversation = await Converstaion.create({
                participants: [senderId, recieverId],
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        });

        if (newMessage) conversation.messages.push(newMessage._id);

        //Save to mongoDB
        await conversation.save();
        await newMessage.save();

        res.status(201).json({ newMessage });
    } catch (e) {
        console.log(`Error in message controller: ${e}`);
        res.status(500).json({ error: `Interal server error` });
    }
};
