import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const darkMode = {
  homeImageUrl: 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png',
}

const ligtMode = {
  homeImageUrl: 'https://assets.ccbp.in/frontend/react-js/home-light-img.png',
}

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log('home', isDarkTheme)
      const modeObj = isDarkTheme ? darkMode : ligtMode
      return (
        <div
          className={`home-container ${isDarkTheme ? 'dark-bg' : 'light-bg'}`}
        >
          <Navbar />
          <img src={modeObj.homeImageUrl} alt="home" className="home-image" />
          <h1>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
