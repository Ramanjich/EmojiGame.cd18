// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameprogressing} = props
  return (
    <nav className="nav-container">
      <div className="image-nav-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="nav-image"
            alt="emoji logo"
          />
        </div>
        <h1 className="nav-emoji-para">Emoji Game</h1>
      </div>
      {isGameprogressing && (
        <div className="nav-description">
          <p className="nav-score-para">Score: {score}</p>
          <p className="nav-topscore-para">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
