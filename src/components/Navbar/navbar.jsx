import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const navbar = () => {
  const menuItems = (
    <>
      <li>
        <a className="text-xl" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="text-xl" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="text-xl" href="#skills">
          Skills
        </a>
      </li>
      <li>
        <a className="text-xl" href="#education">
          Education
        </a>
      </li>

      <li>
        <a className="text-xl" href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a className="text-xl" href="#contact">
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm  sticky top-0 z-50 md:px-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* hamBurger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          {/* Dropdown menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {menuItems}
          </ul>
        </div>

        {/* Logo */}
        <a href="\" className="w-14 ">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Navbar menu items */}
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {/* react icon */}
        <div className="text-3xl ">
          <FaLinkedin />
        </div>

        {/* theme controller */}
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default navbar;
