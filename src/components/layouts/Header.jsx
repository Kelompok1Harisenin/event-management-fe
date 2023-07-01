import { useState } from "react";
function Header(props) {
  return (
    <>
      <header>
        <div id="container" className="flex">
          {/* Iconya */}
          <div id="header-list" className="float-left">
            Event Management
          </div>
          {/* Search Bar */}
          <div id="Search-bar" className="align-middle">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
          {/* Header list */}
          <div id="header-list" className="flex ">
            <ul id="list-event" className="flex float-right">
              {/* Organize */}
              <li id="organize">
                Organize
                <ul id="organize-list">
                  <li><a href="">Create Event</a></li>
                  <li><a href="">Pricing</a></li>
                  <li><a href="">Resource</a></li>
                  <li><a href="">Contact Sales</a></li>
                </ul>
              </li>
              {/* Help */}
              <li id="Help">
                Help
                <ul id="Help-list">
                  <li><a href="">Find Your Ticket</a></li>
                  <li><a href="">Contact an Event Organizer</a></li>
                  <li><a href="">Visit The Help Center</a></li>
                </ul>
              </li>
            </ul>
            <ul id="list-acc" className="flex">
              <li><a href="">Create Event</a></li>
              <li><a href="">Log In</a></li>
              <li><a href="">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
