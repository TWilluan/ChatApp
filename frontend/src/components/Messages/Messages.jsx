import Message from "./Message";
import MessageSkeleton from "../../util/skeleton.jsx"
import useGetMessages from "../../hooks/useGetMessages.js";

const Messages = () => {

	const { loading, messages } = useGetMessages();
	
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;