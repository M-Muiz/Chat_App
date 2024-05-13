import { createContext, useContext, useState } from "react";

const sideBarContext = createContext()




export const useSideContext = () => {
    return useContext(sideBarContext);
}


export const sideBarContextProvider = ({ children }: any) => {
    const [closeSideBar, setCloseSideBar] = useState(false);

    return <sideBarContext.Provider value={{ closeSideBar, setCloseSideBar }}>{children}</sideBarContext.Provider>;
}




export default sideBarContext;