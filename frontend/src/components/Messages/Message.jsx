import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../util/extractTime";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;

    const formattedTime = extractTime(message.createdAt);

    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-sky-600" : "";

    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={profilePic} />
                </div>
            </div>

            <div className={`font-sans chat-bubble text-gray-100 ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            <div className='text-zinc-900 chat-footer opacity-70 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div>
    );
};
export default Message;