import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (

    <form className='flex items-center gap-2 border-b border-white text-white'>
      <IoSearchSharp />
      <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none placeholder:text-white' />
    </form>
  )
}

export default SearchInput
