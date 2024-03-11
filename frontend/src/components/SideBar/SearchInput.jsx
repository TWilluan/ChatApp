
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

function SearchInput() {

    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;

        if (search.length < 3)
            return toast.error("search term must be at least character long");

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            toast.error("user not found")
        }
    }

    return (<>
        <form onSubmit={handleSubmit} className='flex items-center gap-2 font-sans'>
            <input type='text'
                placeholder='Search...'
                className='input input-boarded rounded-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
            />
            
            <button type='submit' className='btn btn-circle bg-sky-600 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>

        </form>
    </>
    )
}


export default SearchInput