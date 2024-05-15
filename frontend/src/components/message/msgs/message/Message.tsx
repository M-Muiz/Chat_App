import { useAuthContext } from '../../../../context/AuthContext'
import useConversation from '../../../../zustand/getConversation';

const Message = ({ message }: any) => {
    const { authUser }: any = useAuthContext();
    const { selectedConversation }: any = useConversation();
    const fromMe = message.senderId === authUser.user._id;

    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.user.profilePic : selectedConversation?.profilePic;

    const created = new Date(message.createdAt);
    const messageDate = created.toLocaleDateString();

    return (
        <div className={`chat py-6 ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="User Avatar" />
                </div>
            </div>
            <div className={`chat-bubble py-4 text-[#536dfe] tracking-wide font-medium shadow-xl ${fromMe ? "bg-white shadow-blue-200 " : "bg-[#536dfe] text-white shadow-blue-300"}`}>{message.message}
            </div>
            <div className="chat-footer opacity-90 mt-1 font-semibold text-[10px] flex gap-1 items-center text-black">
                {messageDate} 
            </div>
        </div>
    )
}

export default Message;
