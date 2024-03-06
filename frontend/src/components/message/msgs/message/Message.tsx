import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Avatar" />
                </div>
            </div>
            <div className="chat-bubble text-black tracking-wide font-medium bg-sky-600/60">Hi Whats Up</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">1:49</div>
        </div>
    )
}

export default Message
