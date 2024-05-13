import useConversation from '../../../zustand/getConversation';

const Conversation = ({ conversation, emoji, lastIdx }: any) => {

  const { selectedConversation, setSelectedConversation }: any = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>

      <div className={'flex gap-2 items-center hover:bg-blue-400 rounded p-2 py-4 cursor-pointer ' + (isSelected ? 'bg-blue-400' : '')}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="User Avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className='flex gap-3 justify-between'>
            <p className='font-blod text-white font-semibold tracking-wider'>{conversation.username}</p>
            <span className='text-sm'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-[0.4px] bg-black" />}
    </>
  )
}

export default Conversation
