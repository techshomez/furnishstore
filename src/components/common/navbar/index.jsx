import { Link } from "react-router-dom";
import "./navbar.scss";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="left">
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="middle">
            <Link to="">Home</Link>
            <Link to="">Home</Link>
            <Link to="">Home</Link>
            <Link to="">Home</Link>
            <Link to="">Home</Link>
            <Link to="">Home</Link>
            <Link to="">Home</Link>
          </div>
          <div className="right">
            <i>
              <FiUser />
            </i>
            <i>
              <FiShoppingCart />
            </i>
            <i>
              <FiSearch />
            </i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
