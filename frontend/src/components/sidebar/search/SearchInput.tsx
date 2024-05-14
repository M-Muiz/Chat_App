import { CgSearch } from "react-icons/cg";

import { BsThreeDotsVertical } from "react-icons/bs";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { IoConstructSharp } from "react-icons/io5";
import getOnlySearchUser from "../../../hooks/getOnlySearchUser";


const SearchInput = () => {

  const [openSearch, setOpenSearch] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const { getUser }: any = getOnlySearchUser();



  const newUpdate = () => {
    toast(<div className="flex items-center gap-2"><IoConstructSharp /> Coming Soon</div>)
  }

  return (
    <div className="flex items-baseline justify-between w-full">

      <div className="flex items-center gap-2">
        <CgSearch size={20} cursor="pointer" onClick={() => setOpenSearch(!openSearch)} />
        {openSearch && <form className='border-b border-blue-400 text-white'>
          <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none text-sm tracking-wider placeholder:text-white'  onChange={getUser(searchValue)}/>
        </form>}
      </div>
      <BsThreeDotsVertical size={20} onClick={newUpdate} cursor="pointer" />
    </div>
  )
}

export default SearchInput


// onChange={(e) => setSearchValue(e.target.value)}