import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({isAuthenticated,setIsAuthenticated}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);  // If token exists, user is authenticated
    } else {
      setIsAuthenticated(false); // Otherwise, user is not authenticated
    }
  }, [setIsAuthenticated]);

  const handleLogout=()=>{
    localStorage.removeItem('token')
    setIsAuthenticated(false)

  }

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold">
          <Link to="/">Lecture Schedulling App</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

  
        <ul className="hidden lg:flex space-x-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/lectures">Lectures</Link></li>
          <li><Link to="/instructor">Instructor</Link></li>
          <li><Link to="/register">Signup</Link></li>
          {isAuthenticated ? (<li><Link onClick={handleLogout}>Logout</Link></li>):(<li><Link to="/login">Login</Link></li>)}
          
          
        </ul>
      </div>

      {/* Mobile Menu (Hidden on desktop) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-500 p-4">
          <ul className="space-y-4 text-white">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
            <li><Link to="/lectures" onClick={toggleMenu}>Lectures</Link></li>
            <li><Link to="/register" onClick={toggleMenu}>Signup</Link></li>
            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
            <li><Link to="/logout" onClick={toggleMenu}>Logout</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
