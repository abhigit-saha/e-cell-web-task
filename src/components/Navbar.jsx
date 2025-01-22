import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
function Navbar() {
  const [menu, setMenu] = useState(false);

  function handleShowMenu(e) {
    e.preventDefault();
    setMenu(!menu);
  }

  return (
    <>
      <div className="sm:flex justify-between items-center p-4 border-b-4">
        <div>
          <div className="sm:hidden" onClick={handleShowMenu}>
            <div className="flex justify-end">
              {menu ? <Menu size={24} /> : <X size={24} />}
            </div>
            <div>
              <div
                className={`${
                  menu && "hidden"
                } flex-col items-center justify-center sm:gap-6`}
              >
                <Link to="/" className="flex justify-center">
                  Home
                </Link>
                <Link to="/grid" className="flex justify-center">
                  Grid
                </Link>
                <Link
                  to="https://www.linkedin.com/in/abhijit-saha-a440b5291/"
                  className="flex justify-center"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex sm:gap-6">
          <Link to="/">Home</Link>
          <Link to="/grid">Grid</Link>
          <Link to="https://www.linkedin.com/in/abhijit-saha-a440b5291/">
            LinkedIn
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
