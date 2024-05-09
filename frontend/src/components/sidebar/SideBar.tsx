import Converstaions from "./conversations/Converstaions"
import Logout from "./logout/Logout"
import SearchInput from "./search/SearchInput"


const SideBar = () => {
    return (
            <div className="flex flex-col border-r border-slate-500 p-4 h-full w-[600px] bg-[#536dfe]">
            <SearchInput />
            <div className="divider px-3"></div>
            <Converstaions />
            <Logout />
        </div>
    )
}

export default SideBar
