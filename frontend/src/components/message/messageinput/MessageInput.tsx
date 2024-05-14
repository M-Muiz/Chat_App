import { useState } from "react";
import { BsSend } from "react-icons/bs"
import useSendMessage from "../../../hooks/useSendMessage";

const MessageInput = () => {

    const [message, setMessage] = useState("");
    const [inputError, setInputError] = useState(false);

    const { sendMessage, loading }: any = useSendMessage();
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setInputError(false)
        if (!message) {
            return setInputError(true)
        }
        await sendMessage(message)
        setMessage("")
    };
    const handleChange = (e: any) => {
        setInputError(false)
        setMessage(e.target.value)
    }

    return (
        <form className='my-3 p-4' onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input onChange={(e: any) => handleChange(e)} value={message} type="text" className={`border_none text-sm w-full pt-2.5 pb-1 bg-transparent outline-none border-b border-black/15 placeholder:text-[#536dfe] text-black font-semibold ${inputError ? "placeholder:text-red-500 border-red-500" : ""}`} placeholder='Send a message' />
                <button className="absolute inset-y-0 end-0 flex items-center pe-3 ">
                    {loading ? <div className="loading laoding-spinner"></div> : <BsSend className={`${inputError ? "text-red-500" : "text-[#536dfe]"}`} />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput
