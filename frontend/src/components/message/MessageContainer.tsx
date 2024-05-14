import Messages from './msgs/Messages'
import MessageInput from './messageinput/MessageInput'
import { TiMessage } from 'react-icons/ti'
import useConversation from '../../zustand/getConversation';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { MdDelete } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";


const MessageContainer = () => {

    const { selectedConversation, setSelectedConversation }: any = useConversation();

    useEffect(() => {
        return setSelectedConversation(null)
    }, [])

    return (
        <div className='md:min-w-[450px] w-[1100px] flex flex-col bg-white rounded-r-md relative'>
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#536dfe] opacity-10"></div>
            {!selectedConversation ?
                (<NoChatSelected />)
                : (
                    <>
                        <div className='border-b border-black/20 h-[70px] p-6 mb-2 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span>
                                    <img className='h-8 w-8 rounded-full' src={selectedConversation.profilePic} alt="" />
                                </span>
                                <span className='text-[#536dfe] font-bold'>{selectedConversation.username}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                            <MdDelete color='#536dfe' />
                            <BiSolidUserDetail color='#536dfe' />

                            </div>
                        </div>
                        <Messages />
                        <MessageInput />
                    </>
                )}
        </div>
    )
}

export default MessageContainer



const NoChatSelected = () => {
    const { authUser }: any = useAuthContext();

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-2xl text-black font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.user.username} ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessage className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};