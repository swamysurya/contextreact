import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const darkMode = {
  aboutImageUrl: 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png',
}

const ligtMode = {
  aboutImageUrl: 'https://assets.ccbp.in/frontend/react-js/about-light-img.png',
}

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log('about', isDarkTheme)
      const modeObj = isDarkTheme ? darkMode : ligtMode

      return (
        <div
          className={`about-container ${isDarkTheme ? 'dark-bg' : 'light-bg'}`}
        >
          <Navbar />
          <img
            src={modeObj.aboutImageUrl}
            alt="about"
            className="about-image"
          />
          <h1>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
