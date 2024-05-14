import { CgSearch } from "react-icons/cg";

import { BsThreeDotsVertical } from "react-icons/bs";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoConstructSharp } from "react-icons/io5";


const SearchInput = () => {

  const [openSearch, setOpenSearch] = useState(false);
  console.log(openSearch)
  const newUpdate = () => {
    toast(<div className="flex items-center gap-2"><IoConstructSharp /> Coming Soon</div>)
  }

  return (
    <div className="flex items-baseline justify-between w-full">

      <CgSearch size={20} cursor="pointer" onClick={() => setOpenSearch(!openSearch)} />
      {openSearch && <form className='flex items-center gap-2 border-b border-white text-white'>
        <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none placeholder:text-white' />
      </form>}
      <BsThreeDotsVertical size={20} onClick={newUpdate} cursor="pointer" />
    </div>
  )
}

export default SearchInput
