import React from 'react'

const Conversation = () => {
  return (
    <>

      <div className='flex gap-2 items-center hover:bg-blue-400 rounded p-2 py-4 cursor-pointer'>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className='flex gap-3 justify-between'> 
            <p className='font-blod text-white font-semibold tracking-wider'>Fatima</p>
            <span className='text-sm'>9:20</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Conversation
