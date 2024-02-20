import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const darkMode = {
  logoUrl:
    'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png',
  modeImg: 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
  colorThemeClass: 'dark-color',
}

const ligtMode = {
  logoUrl:
    'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png',
  modeImg: 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png',
  colorThemeClass: 'light-color',
}

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log('navbar', isDarkTheme)
      const modeObject = isDarkTheme ? darkMode : ligtMode
      return (
        <nav className={`header-container ${isDarkTheme && 'pale-dark-bg'}`}>
          <img src={modeObject.logoUrl} alt="website logo" className="logo" />
          <ul className="home-about-container">
            <Link to="/" className={`home-link ${modeObject.colorThemeClass}`}>
              <li>Home</li>
            </Link>
            <Link
              to="/about"
              className={`about-link ${modeObject.colorThemeClass}`}
            >
              <li>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            data-testid="theme"
          >
            <img src={modeObject.modeImg} alt="theme" className="mode-image" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
