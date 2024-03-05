import React from 'react'

const Conversation = () => {
  return (
    <>

      <div className='flex gap-2 items-center hover:bg-sky-600/20 rounded p-2 py-1 cursor-pointer'>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className='flex gap-3 justify-between'>
            <p className='font-blod text-gray-200'>Fatima</p>
            <span className='text-xl'>a``</span>
          </div>
        </div>
      </div>
      <div className='divider my-0 py-0 h-1'/>
    </>
  )
}

export default Conversation
