import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body">
          {showLeftNavbar && (
            <div className="left-navbar">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-ul">
                <li className="left-navbar-item">Item 1</li>
                <li className="left-navbar-item">Item 2</li>
                <li className="left-navbar-item">Item 3</li>
                <li className="left-navbar-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content">
              <h1 className="content-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eimusmod temper incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-navbar">
              <h1 className="left-navbar-heading">Right Navbar</h1>
              <ul className="left-navbar-ul">
                <p className="right-navbar-item">Ad 1</p>
                <p className="right-navbar-item">Ad 2</p>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
