import React, { useEffect } from "react";
import { useSocketContext } from "../context/socketContext.jsx";
import useConversation from "../zustand/useConversation.js";
const useListenMessages = () => {
    const { socketGlobal } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socketGlobal?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage]);
        });

        return () => socketGlobal?.off("newMessage");
    }, [socketGlobal, setMessages, messages]);
};

export default useListenMessages;
