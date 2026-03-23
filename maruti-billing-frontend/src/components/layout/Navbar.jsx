import { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Pricing", path: "/pricing" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={logo} alt="logo" className="h-16" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="relative text-gray-700 font-medium transition duration-300 hover:text-[#0000ff]"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0000ff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Login Button */}
            <Button text="Login" onClick={() => navigate("/login")} />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0000ff]"
            >
              <svg
                className={`w-7 h-7 transform transition duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden bg-white shadow-md px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setIsOpen(false)} // close menu after click
              className="text-gray-700 font-medium hover:text-[#00def9] transition text-center"
            >
              {item.name}
            </Link>
          ))}

          <Button text="Login" onClick={() => navigate("/login")} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
