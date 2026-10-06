import './../styles/layouts/Header.css'
import { useState } from "react";
import { Link } from "react-router";
import HomeButton from '../components/HomeButton';

export default function Header() {
    return (
        <Navbar>
            <div className="navbar-left">
                <HomeButton />
            </div>
            <div className="navbar-right">
                <NavItem icon="Profile">
                    <DropdownMenu />
                </NavItem>
            </div>
        </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      {props.children}
    </nav>
  );
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {

    return (
        <div className="dropdown">
            <DropdownItem to="/profile">Profile</DropdownItem>
            <DropdownItem to="/login">Login</DropdownItem>
            <DropdownItem to="/create-account">Create Account</DropdownItem>
        </div>
    );
}

function DropdownItem({ to, children }) {
    return (
        <Link to={to} className="menu-item">
            {children}
        </Link>
    );
}

