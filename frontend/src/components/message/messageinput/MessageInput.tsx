import { useState } from "react";
import { BsSend } from "react-icons/bs"
import useSendMessage from "../../../hooks/useSendMessage";

const MessageInput = () => {

    const [message, setMessage] = useState("");

    const { sendMessage, loading }: any = useSendMessage();
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!message) {
            return console.log("fill input")
        }
        await sendMessage(message)
        setMessage("")
    };

    return (
        <form className='my-3 p-4' onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input onChange={(e: any) => setMessage(e.target.value)} value={message} type="text" className='border_none text-sm w-full pt-2.5 pb-1 bg-transparent outline-none border-b border-black/15 placeholder:text-[#536dfe] text-black font-semibold' placeholder='Send a message' />
                <button className="absolute inset-y-0 end-0 flex items-center pe-3 ">
                    {loading ? <div className="loading laoding-spinner"></div> : <BsSend color="#536dfe" />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput
