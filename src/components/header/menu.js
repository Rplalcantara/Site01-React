import { ReactComponent as MenuIcon } from '../../icons/menu.svg';
import { ReactComponent as AboutIcon } from '../../icons/about.svg';
import { ReactComponent as HomeIcon } from '../../icons/home.svg';
import { ReactComponent as ContactIcon } from '../../icons/contact.svg';
import headerLogo from "../../images/placeholder-header-logo.png"
import React, { useState } from 'react';
import { Link } from "react-router-dom"

function Menu() {
  return (
      <div className="header-container">
    <HeaderImg/>
    <Navbar>
      <NavItem icon={<MenuIcon />}>
      <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    </div>
  );
}

function HeaderImg() {
    return (
        <img className="header-image" src={headerLogo} alt="Logo"></img>
    )
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a onClick={() => setOpen(!open)}>
        <span className="icon-button">{props.icon}</span>
        {<span className="icontext">Menu</span>}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
        <div className="menu">
          <Link to="/">
          <DropdownItem leftIcon={<HomeIcon/>}>Home</DropdownItem>
          </Link>
          <Link to={{pathname:"/about"}}>
          <DropdownItem leftIcon={<AboutIcon/>}>About us</DropdownItem>
          </Link>
          <Link to={{pathname:"/contact"}}>
          <DropdownItem leftIcon={<ContactIcon/>}>Contact us</DropdownItem>
          </Link>
        </div>

      </div>
  );
}

export default Menu;