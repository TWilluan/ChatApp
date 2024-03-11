
import React from "react";
import MessageContainer from "../../components/Messages/MessageContainer";
import Sidebar from "../../components/SideBar/Sidebar"

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden hover:shadow-2xl transition ease-out
		 bg-neutral-900
		 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
			<Sidebar/>
			<MessageContainer/>
		</div>
	);
};
export default Home;