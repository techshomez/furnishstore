import { Link } from "react-router-dom";
import "./navbar.scss";
import "./res.scss";
import {
  FiBox,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [openMenu, SetOpenMenu] = useState("middle");
  const handleMenu = () => {
    SetOpenMenu("middleMobile");
  };

  const handleClose = () => {
    SetOpenMenu("middle");
  };
  return (
    <>
      <main className="main">
        <header className="header">
          <nav className="navbar">
            <div className="left">
              <Link to="/" className="logo">
                <i>
                  <FiBox />
                </i>
                <span>FurnishStore</span>
              </Link>
            </div>
            <div className={openMenu}>
              <span onClick={handleClose}>
                <FiX />
              </span>
              <Link to="" className="active">
                Home
              </Link>
              <Link to="">About</Link>
              <Link to="">Furniture</Link>
              <Link to="">Testimonial</Link>
              <Link to="">Blog</Link>
              <Link to="">Contact</Link>
            </div>
            <div className="right">
              <i>
                <FiUser />
              </i>
              <i>
                <FiShoppingCart />
              </i>
              <i className="icon-active">
                <FiSearch />
              </i>
            </div>
            <div className="hambuger" onClick={handleMenu}>
              <i>
                <FiMenu />
              </i>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
};

export default Header;
