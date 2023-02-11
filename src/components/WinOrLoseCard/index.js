// Write your code here.
import './index.css'

const wonUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const loseUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onPlayAgain} = props
  const wlUrl = isWon ? wonUrl : loseUrl
  const text = isWon ? 'WON' : 'LOSE'
  const text2 = isWon ? 'Best Score' : 'Score'

  const onPlayBtn = () => {
    onPlayAgain()
  }

  return (
    <div className="win-lose-container">
      <div className="w-l-description">
        <h1 className="wl-heading">YOU {text}</h1>
        <p className="wl-para-1">{text2}</p>
        <p className="wl-para-2">{score}/12</p>
        <button type="button" className="w-l-btn" onClick={onPlayBtn}>
          Play Again
        </button>
      </div>
      <div className="w-l-image-con">
        <img src={wlUrl} alt="won or lose" className="wl-images" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
