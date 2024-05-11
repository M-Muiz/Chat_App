import React from 'react'
import { BsSend } from "react-icons/bs"

const MessageInput = () => {
    return (
        <form className='my-3 p-4'>
            <div className="w-full relative">
                <input type="text" className='border_none text-sm w-full pt-2.5 pb-1 bg-transparent outline-none border-b border-black/15 placeholder:text-[#536dfe] text-black font-semibold' placeholder='Send a message' />
                <button className="absolute inset-y-0 end-0 flex items-center pe-3 ">
                    <BsSend color="#536dfe" />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
