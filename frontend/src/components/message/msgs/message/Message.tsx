import { useAuthContext } from '../../../../context/AuthContext'
import useConversation from '../../../../zustand/getConversation';

const Message = ({ message }: any) => {
    const { authUser }: any = useAuthContext();
    const { selectedConversation }: any = useConversation();
    const fromMe = message.senderId === authUser.user._id;

    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.user.profilePic : selectedConversation?.profilePic;
    const differentColors = fromMe ? 'from-blue-500' : '';

    console.log(fromMe)

    return (
        <div className={`chat py-6 ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="User Avatar" />
                </div>
            </div>
            <div className={`chat-bubble py-4 text-black tracking-wide font-medium bg-white shadow-xl shadow-blue-200 ${differentColors}`}>{message.message}
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">1:49</div>
        </div>
    )
}

export default Message;
