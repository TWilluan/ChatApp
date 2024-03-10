import Conversation from "../models/convers.model.js";
import Message from "../models/message.model.js";

export const send = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] },
        });

        if (!conversation) {
            // check if conversation is created of not
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        });

        if (newMessage) conversation.messages.push(newMessage._id);

        // Socketio -> make it realtime

        // Save to mongoDB
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);
    } catch (e) {
        console.log(`Error in message controller: ${e}`);
        res.status(500).json({ error: `Interal server error` });
    }
};

export const get = async (req, res) => {
    try {
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] },
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (e) {
        console.log(`Error in message controller: ${e.message}`);
        res.status(500).json({ error: "Internal server error" });
    }
};
