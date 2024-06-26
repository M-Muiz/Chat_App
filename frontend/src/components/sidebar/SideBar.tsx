import useShowSidebar from "../../zustand/ShowSidebar";
import Converstaions from "./conversations/Converstaions"
import Logout from "./logout/Logout";
import SearchInput from "./search/SearchInput"
import { BiMenuAltLeft } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";

const SideBar = () => {

    const { show, toggleShow } = useShowSidebar();

    console.log(show)

    return (
        <div className={`flex flex-col border-r h-full bg-[#536dfe] relative rounded-l-md ${show ? "w-24 flex items-center smoothanimate" : "w-[400px]"} smoothanimate`}>

            <div className="flex items-center gap-4 h-[70px] border p-6 border-black/20 w-full">
                {show ? <BiMenuAltRight size={24} cursor="pointer" onClick={() => toggleShow()} /> :
                    <BiMenuAltLeft size={24} cursor="pointer" onClick={() => toggleShow()} />
                }
                {!show &&
                    <SearchInput />
                }
            </div>
            <div className="p-4"></div>
            <Converstaions />
            <div className="p-4 absolute bottom-2">
                <Logout />
            </div>
        </div>
    )
}

export default SideBar;
