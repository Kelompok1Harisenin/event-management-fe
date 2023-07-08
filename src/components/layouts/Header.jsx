import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo.jpg"
import { FaBars, FaBeer, FaSearch } from 'react-icons/fa';

function Header(props) {
  const [isHovered, setIsHovered] = useState({
    organize: false,
    help: false,
    bars : false
  });
  const [isPressed, setIsPressed] = useState(false);


  // Hover & Click
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

  const handleClick = () => {
    setIsPressed((prevState) => (!prevState))
  }

  const maxMd = (array) => {
    return array.map((value) => {
      return `max-md:${value}`
    })
  };

  return (
    <header className="bg-white text-black h-20 w-full">
      <div id="container" className={`grid grid-cols-7 gap-2 w-4/5 mx-auto h-full max-md:grid-cols-6 max-md:w-[95%] `}>
        {/* Iconya */}
        <div id="header-icon" className="float-left text-center h-5/6 max-md:cols-span-1">
          <div id="image-logo" className="">
            <NavLink> <img src={Logo} alt="logo" className="h-20" /></NavLink>
          </div>
        </div>
        {/* Search Bar */}
        <div id="Search-bar" className="text-center col-span-3 py-6 max-md:col-span-4">
          <form className="flex">
            <input type="text" className="w-5/6 bg-gray-200 rounded-lg h-10 font-medium m-auto " /><button type='submit' className="h-10 rounded-full ml-3 px-5 hover:bg-gray-300 text-center "><FaSearch /></button>
          </form>
        </div>
        {/* Header list */}
        <div id="header-list" className="col-span-3 text-center max-md:col-span-1 ">
          {/* <button className="hidden max-md:block p-8 ml-3  hover:bg-gray-300 text-center " ><FaBars /></button> */}
          <ul className="hidden max-md:block grid grid-cols-1">
            <li className="col-span-1 text-center py-8 px-10 hover:bg-gray-300" onClick={() => handleClick('bars')}><FaBars/></li>
          </ul>
          <ul id="list-event" className={`grid grid-cols-5 max-md:${isPressed ? 'block' : 'hidden'} max-md:w-60 max-md:grid-rows-1 max-md:bg-white`}>
            {/* Organize */}
            <li id="organize" className="col-span-1 text-center py-7 hover:bg-gray-300 " onMouseEnter={() => handleMouseEnter('organize')} onMouseLeave={() => handleMouseLeave('organize')} >
              Organize
              <ul id="organize-list" className={`${isHovered.organize ? 'block' : 'hidden'} h-full grid grid-rows-4 bg-white mt-7 w-40 rounded-lg `}>
                <li className="h-full row-span-1 hover:bg-gray-300"><NavLink>Create Event</NavLink></li>
                <li className="h-full row-span-1 hover:bg-gray-300"><NavLink>Pricing</NavLink></li>
                <li className="h-full row-span-1 hover:bg-gray-300"><NavLink>Resource</NavLink></li>
                <li className="h-full row-span-1 hover:bg-gray-300"><NavLink>Contact Sales</NavLink></li>
              </ul>
            </li>
            {/* Help */}
            <li id="Help" className="col-span-1 text-center py-7 hover:bg-gray-300" onMouseEnter={() => handleMouseEnter('help')} onMouseLeave={() => handleMouseLeave('help')} >
              Help
              <ul id="Help-list" className={`${isHovered.help ? 'block' : 'hidden'} h-full grid grid-rows-3 bg-white mt-7 w-40 rounded-lg`}>
                <li className="h-full row-span-1 hover:bg-gray-300"><NavLink >Find Your Ticket</NavLink></li>
                <li className="h-full row-span-1 hover:bg-gray-300"><NavLink >Contact an Event Organizer</NavLink></li>
                <li className="h-full row-span-1 hover:bg-gray-300"><NavLink >Visit The Help Center</NavLink></li>
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
