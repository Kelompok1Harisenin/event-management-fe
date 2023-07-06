import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo.jpg"
import { FaBars, FaBeer, FaSearch } from 'react-icons/fa';

function Header(props) {
  const [isHovered, setIsHovered] = useState({
    organize: false,
    help: false
  });

  const handleMouseEnter = (id) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [id]: true
    }));
  };

  const handleMouseLeave = (id) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [id]: false
    }));
  };

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
        <div id="Search-bar" className="text-center col-span-3 py-6">
          <label htmlFor="">
            <input type="text" className="w-5/6 bg-gray-200 rounded-lg h-10 font-medium m-auto" /><button className="h-10 rounded-lg ml-3 px-5 bg-gray-300 text-center"><FaSearch /></button>
          </label>
        </div>
        {/* Header list */}
        <div id="header-list" className="col-span-3 text-center">
          <div id="header-bars" className="hidden">
            <button><FaBars /></button>
          </div>
          <ul id="list-event" className="grid grid-cols-5">
            {/* Organize */}
            <li id="organize" className="col-span-1 text-center py-7 hover:bg-gray-300" onMouseEnter={() => handleMouseEnter('organize')} onMouseLeave={() => handleMouseLeave('organize')} >
              Organize
              <ul id="organize-list" className={`${isHovered.organize ? 'block' : 'hidden'} h-full grid grid-rows-4 bg-white mt-7 w-40 rounded-lg`}>
                <li className="h-10 row-span-1 hover:bg-gray-300"><NavLink>Create Event</NavLink></li>
                <li className="h-10 row-span-1 hover:bg-gray-300"><NavLink>Pricing</NavLink></li>
                <li className="h-10 row-span-1 hover:bg-gray-300"><NavLink>Resource</NavLink></li>
                <li className="h-10 row-span-1 hover:bg-gray-300"><NavLink>Contact Sales</NavLink></li>
              </ul>
            </li>
            {/* Help */}
            <li id="Help" className="col-span-1 text-center py-7 hover:bg-gray-300" onMouseEnter={() => handleMouseEnter('help')} onMouseLeave={() => handleMouseLeave('help')} >
              Help
              <ul id="Help-list" className={`${isHovered.help ? 'block' : 'hidden'} h-full grid grid-rows-3 bg-white mt-7 w-40 rounded-lg`}>
                <li className="h-10 row-span-1 hover:bg-gray-300"><NavLink >Find Your Ticket</NavLink></li>
                <li className="h-14 row-span-1 hover:bg-gray-300"><NavLink >Contact an Event Organizer</NavLink></li>
                <li className="h-14 row-span-1 hover:bg-gray-300"><NavLink >Visit The Help Center</NavLink></li>
              </ul>
            </li>
            {/* Account & Create Event*/}
            <li id="create-event" className="col-span-1 text-center text-green-600 py-7 hover:bg-green-500 hover:text-white"><NavLink>Create Event</NavLink></li>
            <li id="Log-in" className="col-span-1 text-center py-7 hover:bg-gray-300"><NavLink>Log In</NavLink></li>
            <li id="Sign-up" className="col-span-1 text-center py-7 hover:bg-gray-300"><NavLink>Sign Up</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
