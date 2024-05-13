import Conversation from '../converstaion/Conversation'
import useGetConversations from '../../../hooks/useGetConversations'
import { getRandomEmoji } from '../../../utils/emoji';

const Converstaions = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations)
  return (
    <div>

      {conversations.map((conversation: any) => (
        <Conversation key={conversation._id }  conversation={conversation}   emoji={getRandomEmoji()}/>
      ))}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Converstaions
