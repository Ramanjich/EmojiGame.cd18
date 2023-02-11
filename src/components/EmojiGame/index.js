import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {
    isWon: false,
    isGameprogressing: true,
    isShuffling: false,
    clickingList: [],
    score: 0,
    topScore: 0,
  }

  onShuffling = () => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const newList = shuffledEmojisList()
    return newList
  }

  onEmojisClicking = id => {
    const {emojisList} = this.props
    const {clickingList} = this.state
    const isEmojiIdIn = clickingList.includes(id)

    if (isEmojiIdIn) {
      const {score, topScore} = this.state
      const currentScore = score
      if (currentScore > topScore) {
        this.setState({topScore: currentScore})
      }
      this.setState({clickingList: [], isGameprogressing: false})
    } else {
      const wonOrLose = emojisList.length === clickingList.length + 1
      console.log(clickingList.length + 1)
      this.setState(prevState => ({
        clickingList: [...prevState.clickingList, id],
        score: prevState.score + 1,
        isShuffling: true,
        isWon: wonOrLose,
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({score: 0, clickingList: [], isGameprogressing: true})
  }

  render() {
    const {emojisList} = this.props
    const {isWon, isShuffling, isGameprogressing, score, topScore} = this.state
    const updated = isShuffling ? this.onShuffling() : emojisList

    return (
      <div className="emojigame-app-container">
        <NavBar
          score={score}
          topScore={topScore}
          isGameprogressing={isGameprogressing}
        />
        <div className="emoji-card-container">
          {isGameprogressing ? (
            <ul className="emoji-ul-con">
              {updated.map(eachList => (
                <EmojiCard
                  eachList={eachList}
                  key={eachList.id}
                  onEmojisClicking={this.onEmojisClicking}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              isWon={isWon}
              score={score}
              onPlayAgain={this.onPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
