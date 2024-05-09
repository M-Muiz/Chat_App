import MessageContainer from "../../components/message/MessageContainer"
import SideBar from "../../components/sidebar/SideBar"

const Home = () => {
    return (
        <div className="flex  h-[90vh] pt-4 border border-red-500 ">
            <SideBar />
            <MessageContainer />
        </div>
    )
}

export default Home
