import Conversation from '../converstaion/Conversation'
import useGetConversations from '../../../hooks/useGetConversations'
import { getRandomEmoji } from '../../../utils/emoji';
const Converstaions = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div>

      {conversations.map((conversation, ind: any) => (
        <Conversation key={ind}
          conversation={conversation} emoji={getRandomEmoji()} lastIdx={ind === conversations.length - 1}
        />
      ))}

      {loading ?
        <div className='flex items-center justify-center pt-8'>
          <span className='loading loading-spinner w-3/6'></span>
        </div>
        : null}
    </div>
  )
}

export default Converstaions
