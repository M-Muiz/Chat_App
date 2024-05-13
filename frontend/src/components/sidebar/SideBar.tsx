import Converstaions from "./conversations/Converstaions"
import Logout from "./logout/Logout";
import SearchInput from "./search/SearchInput"
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";




const SideBar = () => {

    const [closeSidebar, setCloseSidebar] = useState(false);

    return (
        <div className={`flex flex-col border-r h-full bg-[#536dfe] relative rounded-l-md ${closeSidebar ? "w-32 smoothanimate" : "w-[400px]"} smoothanimate`}>

            <div className="flex items-center gap-6 h-[70px] border p-6 border-black/20">
                <RiMenu2Fill onClick={() => setCloseSidebar(!closeSidebar)} />
                <SearchInput />
            </div>
            <div className="p-4"></div>
            <Converstaions />
            <div className="p-4 absolute bottom-2">
                <Logout />
            </div>
        </div>
    )
}

export default SideBar
