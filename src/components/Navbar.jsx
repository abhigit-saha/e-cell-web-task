import React, { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);
  function handleShowMenu(e) { 
    e.preventDefault();
    
  }
  return (
    <>
      <div className="sm:flex justify-between items-center  p-4">
        <div>
          <div className="sm:hidden" onClick={handleShowMenu}>
            Hamburger
          </div>
        </div>
        <div className=" hidden sm:flex sm:gap-6 ">
          <div>Home</div>
          <div>Grid</div>
          <div>LinkedIn</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
