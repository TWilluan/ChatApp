import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import toast from "react-hot-toast"


const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    useEffect(() => {

        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`);
                const data = res.json();
                if (data.error){
                    throw new Error(data.error);
                }

                setMessages(data);
            } catch (e) {
                console.log("Error in useGetMessage")
                toast.error(e.error)
            } finally {
                setLoading(false);
            }
        }

        if (selectedConversation?._id)
            getMessages();
    },[selectedConversation?._id, setMessages]);

    return { loading, messages };
}

export default useGetMessages;