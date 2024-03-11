

import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-none bg-zinc-900 p-3 flex flex-col'>
			<SearchInput />
			
			<div className='divider my-2 py-0 h-1'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;