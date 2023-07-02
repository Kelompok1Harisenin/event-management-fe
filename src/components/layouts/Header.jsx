import { useState } from "react";

function Header(props) {
  return (

    <header>
      <div id="container" className="grid grid-cols-3">
        {/* Iconya */}
        <div id="header-list" className="float-left">
          Event Management
        </div>
        {/* Search Bar */}
        <div id="Search-bar" className="align-middle">
          <div class="relative">
            <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
            <input type="text" class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name=""/>
              <span class="absolute top-4 right-5 border-l pl-4"><i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
          </div>
        </div>
        {/* Header list */}
        <div id="header-list" className="flex ">
          <ul id="list-event" className="flex float-right">
            {/* Organize */}
            <li id="organize">
              Organize
              <ul id="organize-list" className="hidden">
                <li><a href="">Create Event</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Resource</a></li>
                <li><a href="">Contact Sales</a></li>
              </ul>
            </li>
            {/* Help */}
            <li id="Help">
              Help
              <ul id="Help-list" className="hidden">
                <li><a href="">Find Your Ticket</a></li>
                <li><a href="">Contact an Event Organizer</a></li>
                <li><a href="">Visit The Help Center</a></li>
              </ul>
            </li>
            {/* Account & Create Event*/}
            <li><a href="">Create Event</a></li>
            <li><a href="">Log In</a></li>
            <li><a href="">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
