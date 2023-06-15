import { useState } from "react";


function Header(props) {
  return (
    <>
      <header className="">
        <div className="w-11/12 mx-auto grid grid-cols-3 gap-4">
          <div className=" text-xl" id="header-logo">
            EVENT MANAGEMENT
          </div>
          <div className="" id="search-bar">
            <input type="text" placeholder="FIND EVENT?"/>
          </div>
          <div className="" id="sign">
            <button></button>
          </div>
        </div>
      </header>
    </>
  )
}


export default Header;
