import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log('notfound', isDarkTheme)
      return (
        <div className={`not-found-container ${isDarkTheme && 'dark-bg'}`}>
          <Navbar />
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="not-found-image"
          />
          <h1
            className={`lost-your-way-heading ${
              !isDarkTheme && 'not-found-head-color'
            }`}
          >
            Lost Your Way?
          </h1>
          <p
            className={`not-found-heading ${
              !isDarkTheme && 'not-found-para-color'
            }`}
          >
            We cannot seem to find the page you are looking for.
          </p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
