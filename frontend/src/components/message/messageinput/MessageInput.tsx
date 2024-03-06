import React from 'react'
import { BsSend } from "react-icons/bs"

const MessageInput = () => {
    return (
        <form className='my-3 px-4'>
            <div className="w-full relative">
                <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white' placeholder='Send a message' />
                <button className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <BsSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
