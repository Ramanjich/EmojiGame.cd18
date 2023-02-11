// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachList, onEmojisClicking} = props
  const {id, emojiUrl, emojiName} = eachList
  const onEmojiBtnClick = () => {
    onEmojisClicking(id)
  }

  return (
    <li className="items">
      <button
        className="emoji-card-button"
        type="button"
        onClick={onEmojiBtnClick}
      >
        <img src={emojiUrl} className="emojis-image" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
