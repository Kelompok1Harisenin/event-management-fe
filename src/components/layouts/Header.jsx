import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo.jpg"

    var list = {
      organize : document.getElementById('organize'),
      help : document.getElementById('Help'),
      C_event : document.getElementById('create_event'),
      login : document.getElementById('Log-in'),
      signup : document.getElementById('Sign-up')
    }
    var N_list = {
      organize_list : document.getElementById('organize-list'),
      help_list : document.getElementById('Help-list')
    }
    list.organize.addEventListener('mouseenter',() => {
      N_list.organize_list.style = `
        width : 180px;
        margin-top : 30px;
        background-color: white;
        display : block;
        `;
    })
    list.organize.addEventListener('mouseleave',() => {
      N_list.organize_list.style = `display : none`
    })


function Header(props) {
  return (

    <header className="bg-white text-black h-20">
      <div id="container" className="grid grid-cols-7 gap-2 w-4/5 mx-auto h-full">
        {/* Iconya */}
        <div id="header-icon" className="float-left text-center h-5/6">
          <div id="image-logo" className="">
            <img src={Logo} alt="logo" className="h-20" />
          </div>
        </div>
        {/* Search Bar */}
        <div id="Search-bar" className="text-center col-span-3 py-5">
          <input type="text" className="w-5/6 bg-gray-200 rounded-lg h-auto font-medium m-auto" />
        </div>
        {/* Header list */}
        <div id="header-list" className="col-span-3 text-center">
          <ul id="list-event" className="grid grid-cols-5">
            {/* Organize */}
            <li id="organize" className="col-span-1 text-center h-auto py-3 hover:bg-gray-300">
              Organize
              <ul id="organize-list" className="hidden h-40">
                <li><NavLink>Create Event</NavLink></li>
                <li><NavLink>Pricing</NavLink></li>
                <li><NavLink>Resource</NavLink></li>
                <li><NavLink>Contact Sales</NavLink></li>
              </ul>
            </li>
            {/* Help */}
            <li id="Help" className="col-span-1 text-center py-7 hover:bg-gray-300">
              Help
              <ul id="Help-list" className="hidden">
                <li><NavLink >Find Your Ticket</NavLink></li>
                <li><NavLink >Contact an Event Organizer</NavLink></li>
                <li><NavLink >Visit The Help Center</NavLink></li>
              </ul>
            </li>
            {/* Account & Create Event*/}
            <li id="create-event" className="col-span-1 text-center py-7 hover:bg-gray-300"><NavLink>Create Event</NavLink></li>
            <li id="Log-in" className="col-span-1 text-center py-7 hover:bg-gray-300"><NavLink>Log In</NavLink></li>
            <li id="Sign-up" className="col-span-1 text-center py-7 hover:bg-gray-300"><NavLink>Sign Up</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
