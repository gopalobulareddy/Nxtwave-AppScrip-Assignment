import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";
import React from 'react';
import './index.css';

const Header = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const onClickNavbar = useCallback(() => {
    setNavbarToggle(prevState => !prevState);
  }, []);

  const navigationClass = navbarToggle ? "navigation-items" : "hidden-navigation-items";

  return (
    <div className="header-container">
      {/* Small Device Header */}
      <div className="small-device-header">
        <div className="logo-container">
          {navbarToggle ? (
            <GiTireIronCross className="toggle-icon" size={25} onClick={onClickNavbar} aria-label="Close navigation" />
          ) : (
            <HiMiniBars3 className="toggle-icon" size={25} onClick={onClickNavbar} aria-label="Open navigation" />
          )}
          <Link to="/" className="logo-link">
            <img 
              src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1713597113/Logo_vfw1bu.png" 
              alt="Logo" 
              className="website-logo" 
            />
          </Link>
        </div>
        <div className="website-name">
          <Link to="/" className="nav-link">
            <h1>LOGO</h1>
          </Link>
        </div>
        <ul className="nav-icons">
          <li><FiSearch size={24} aria-label="Search" /></li>
          <li><IoHeartOutline size={24} aria-label="Favorites" /></li>
          <li>
            <Link to="/cart" className="nav-link">
              <BsHandbag size={21} aria-label="Cart" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Large Device Header */}
      <div className="large-device-header">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img 
              src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1713597113/Logo_vfw1bu.png" 
              alt="Logo" 
              className="website-logo" 
            />
          </Link>
        </div>
        <div className="website-name">
          <Link to="/" className="nav-link">
            <h1>LOGO</h1>
          </Link>
        </div>
        <ul className="nav-icons">
          <li><FiSearch size={24} aria-label="Search" /></li>
          <li><IoHeartOutline size={24} aria-label="Favorites" /></li>
          <li>
            <Link to="/cart" className="nav-link">
              <BsHandbag size={21} aria-label="Cart" />
            </Link>
          </li>
          <li><CiUser size={24} aria-label="User" /></li>
          <li>
            <select className="language-select" aria-label="Language selection">
              <option value="ENG">ENG</option>
              <option value="HIN">HIN</option>
              <option value="TEL">TEL</option>
            </select>
          </li>
        </ul>
      </div>

      {/* Small Device Bottom Navigation */}
      <div className="small-device-bottom-nav">
        <ul className={navigationClass}>
          <li className="nav-item">SHOP</li>
          <li className="nav-item">SKILLS</li>
          <li className="nav-item">STORIES</li>
          <li className="nav-item">ABOUT</li>
          <li className="nav-item">CONTACT US</li>
        </ul>
      </div>

      {/* Large Device Bottom Navigation */}
      <div className="large-device-bottom-nav">
        <ul className="navigation-items">
          <li className="nav-item">SHOP</li>
          <li className="nav-item">SKILLS</li>
          <li className="nav-item">STORIES</li>
          <li className="nav-item">ABOUT</li>
          <li className="nav-item">CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
