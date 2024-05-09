import Messages from './msgs/Messages'
import MessageInput from './messageinput/MessageInput'
import { TiMessage } from 'react-icons/ti'

const MessageContainer = () => {
    const noChatSelected = false;
    return (
        <div className='md:min-w-[450px] w-[800px] flex flex-col bg-white'>
            {noChatSelected ?
                (<NoChatSelected />)
                : (
                    <>
                        <div className='shadow-lg p-6 mb-2 flex items-center justify-between'>
                            <div>

                                <span className='label-text'>To:</span> <span className='text-[#536dfe] font-bold'>John doe</span>
                            </div>
                            <div>
                                ds
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
    // const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 Moiz ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessage className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};