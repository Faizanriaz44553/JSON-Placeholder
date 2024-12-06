import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div>
      <div className='navbar'>
        <div className="links">
          <h3>JSONPlaceholder</h3>
        </div>
        <div className="links">
          <ul>
            <li>Guide</li>
            <li>Sponsor</li>
            <li>this project</li>
            <li>Blog</li>
            <li>My JSON</li>
            <li>Server</li>
          </ul>
        </div>
      </div>
      <div className="moblile-nav">
        <div>
          <h3>JSONPlaceholder</h3>
        </div>
        <div>
          <span className='nav-icon'><img className='nav-icon-img' src="/images/nav-icn.png" alt="" /></span>
        </div>
      </div>
    </div>
  )
}

export default Header
