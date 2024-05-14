import { CgSearch } from "react-icons/cg";

import { BsThreeDotsVertical } from "react-icons/bs";


const SearchInput = () => {

cost

  return (
    <div className="flex items-baseline justify-between w-full">

      <CgSearch size={20} cursor="pointer"/>
      {/* <form className='flex items-center gap-2 border-b border-white text-white'>
        <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none placeholder:text-white' />
      </form> */}
      <BsThreeDotsVertical size={20} onClick={newUpdate} cursor="pointer"/>
    </div>
  )
}

export default SearchInput
