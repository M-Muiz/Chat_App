import { useState } from 'react'
import useGetMessages from '../../../hooks/useGetMessages'
import MessageSkeleton from '../../skeletons/MessageSkeleton'
import Message from './message/Message'

const Messages = () => {
  const { loading, messages } = useGetMessages()
  // const [loading, setLaoding] = useState(true)

  let msg = messages.messages;
  return (

    <div className='px-4 flex-1 overflow-auto'>

      {!loading && msg &&
        msg.map((message: any) => (
          <Message key={message._id} message={message} />
        ))};


      {loading && [...Array(5)].map((_, ind) => (
        <MessageSkeleton key={ind} />
      ))}

      {!loading && messages.length === 0 && (
        <h1 className='text-black'>Send a message to start the conversation</h1>
      )}

    </div>
  )
}

export default Messages
