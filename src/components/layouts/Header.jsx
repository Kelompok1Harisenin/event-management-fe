import { useState } from "react";
function Header(props) {
  return (
    <>
      <header>
        <div className="header-logo">
          EVENT MANAGEMENT
        </div>
        <div className="header-list">
          <ul>
            <li>Organize</li>
            <li>Help</li>
            <li><button>Create Event</button></li>
          </ul>
        </div>
        <div className="header-acc">
            <li><button >Log In</button></li>
            <li><button>Sign Up</button></li>
        </div>
      </header>
    </>
  )
}

export default Header;
