import { CgSearch } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoConstructSharp } from "react-icons/io5";
import useGetConversations from "../../../hooks/useGetConversations";
import useConversation from "../../../zustand/getConversation";


const SearchInput = () => {

  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { conversations } = useGetConversations();
  const { setSelectedConversation }: any = useConversation()


  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!searchValue) return;
    if (searchValue.length < 3) {
      return toast.error("Search value must be atleast 3 characters");
    }
    const converstaion = conversations.find((converstaion: any) => converstaion.username.toLowerCase().includes(searchValue.toLocaleLowerCase()));
    if (converstaion) {
      setSelectedConversation(converstaion)
      setSearchValue("")
    } else {
      toast.error("No user found")
    }
  }

  const newUpdate = () => {
    toast(<div className="flex items-center gap-2"><IoConstructSharp /> Coming Soon</div>)
  }

  return (
    <div className="flex items-baseline justify-between w-full">

      <div className="flex items-center gap-2">
        <CgSearch size={20} cursor="pointer" onClick={() => setOpenSearch(!openSearch)} />
        {openSearch &&
          <form onSubmit={handleSubmit} className='border-b border-blue-400 text-white'>
            <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none text-sm tracking-wider placeholder:text-white' onChange={(e: any) => setSearchValue(e.target.value)} value={searchValue} />
          </form>}
      </div>
      <BsThreeDotsVertical size={20} onClick={newUpdate} cursor="pointer" />
    </div>
  )
}

export default SearchInput
