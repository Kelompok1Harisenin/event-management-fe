import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (

    <header className="bg-white text-black">
      <div id="container" className="grid grid-cols-7 gap-2 w-4/5 mx-auto h-full">
        {/* Iconya */}
        <div id="header-icon" className="float-left py-5">
          <img src="./../../../assets/Logo.jpg" alt="LOGO" />
          <img src="./../assets/Logo.jpg" alt="" />
        </div>
        {/* Search Bar */}
        <div id="Search-bar" className="text-center col-span-3 py-5">
          <input type="text" className="w-5/6 bg-gray-500 rounded-lg h-7"/>
        </div>
        {/* Header list */}
        <div id="header-list" className="col-span-3 text-center">
          <ul id="list-event" className="grid grid-cols-5">
            {/* Organize */}
            <li id="organize" className="col-span-1 text-center py-5">
              Organize
              <ul id="organize-list" className="hidden">
                <li><NavLink>Create Event</NavLink></li>
                <li><NavLink>Pricing</NavLink></li>
                <li><NavLink>Resource</NavLink></li>
                <li><NavLink>Contact Sales</NavLink></li>
              </ul>
            </li>
            {/* Help */}
            <li id="Help" className="col-span-1 text-center py-5">
              Help
              <ul id="Help-list" className="hidden">
                <li><NavLink >Find Your Ticket</NavLink></li>
                <li><NavLink >Contact an Event Organizer</NavLink></li>
                <li><NavLink >Visit The Help Center</NavLink></li>
              </ul>
            </li>
            {/* Account & Create Event*/}
            <li id="create-event" className="col-span-1 text-center py-5"><NavLink>Create Event</NavLink></li>
            <li id="Log-in" className="col-span-1 text-center py-5"><NavLink>Log In</NavLink></li>
            <li id="Sign-up" className="col-span-1 text-center py-5"><NavLink>Sign Up</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
