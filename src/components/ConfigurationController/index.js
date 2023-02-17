import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationControl = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const toggleContent = event => onToggleShowContent(event.target.checked)

      const toggleLeftNavbar = event =>
        onToggleShowLeftNavbar(event.target.checked)

      const toggleRightNavbar = event =>
        onToggleShowRightNavbar(event.target.checked)

      return (
        <div className="configuration-control">
          <h1 className="configuration-control-heading">Layout</h1>
          <div className="configuration-control-ul">
            <div className="configuration-control-li">
              <input
                className="configuration-control-li-input"
                type="checkbox"
                checked={showContent}
                onChange={toggleContent}
                id="content"
              />
              <label
                htmlFor="content"
                className="configuration-control-li-label"
              >
                Content
              </label>
            </div>
            <div className="configuration-control-li">
              <input
                className="configuration-control-li-input"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={toggleLeftNavbar}
                id="leftNavbar"
              />
              <label
                htmlFor="leftNavbar"
                className="configuration-control-li-label"
              >
                Left Navbar
              </label>
            </div>
            <div className="configuration-control-li">
              <input
                className="configuration-control-li-input"
                type="checkbox"
                checked={showRightNavbar}
                onChange={toggleRightNavbar}
                id="rightNavbar"
              />
              <label
                htmlFor="rightNavbar"
                className="configuration-control-li-label"
              >
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationControl
