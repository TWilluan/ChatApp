import Conversation from "../models/convers.model.js";
import Message from "../models/message.model.js";
import { io, getRecieverSocketId } from "../socket/socket.js";

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

        // Save to mongoDB
        await Promise.all([conversation.save(), newMessage.save()]);

        // Socket implementation
        const recieverSocketId = getRecieverSocketId(recieverId);
        if (recieverSocketId) {
            // send event to specific client
            io.to(recieverSocketId).emit("newMessage", newMessage);
        }

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
