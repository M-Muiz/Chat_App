import MessageContainer from "../../components/message/MessageContainer"
import SideBar from "../../components/sidebar/SideBar"

const Home = () => {
    
    return (
        <div className="flex h-[90vh]">
            <SideBar />
            <MessageContainer />
        </div>
    )
}

export default Home
