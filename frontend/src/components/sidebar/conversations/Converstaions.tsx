import Conversation from '../converstaion/Conversation'
import useGetConversations from '../../../hooks/useGetConversations'
import { getRandomEmoji } from '../../../utils/emoji';

const Converstaions = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations)
  return (
    <div>

      {conversations.map((conversation, ind: any) => (
        <Conversation
          key={conversation} conversation={conversation} emoji={getRandomEmoji()} lastIdx={ind === conversations.length -1}
        />
      ))}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Converstaions
