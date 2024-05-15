import { useEffect, useRef } from 'react'
import useGetMessages from '../../../hooks/useGetMessages'
import MessageSkeleton from '../../skeletons/MessageSkeleton'
import Message from './message/Message'

const Messages = () => {
  const { loading, messages } = useGetMessages()

  const msg = messages.messages;
  const lastMessageRef: any = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100);
  }, [messages])

  return (

    <div className='px-4 flex-1 overflow-auto'>

      {!loading && msg &&
        msg.map((message: any) => (
          <div key={message._id}
            ref={lastMessageRef}>
            <Message message={message} />
          </div>
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
