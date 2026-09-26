import './../styles/layouts/Header.css'
import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
    return (
        <Navbar>
            <NavItem icon="Profile">
                <DropdownMenu />
            </NavItem> 
        </Navbar>
  );
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
            <a className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    function DropdownItem({ to, children }) {
        return (
            <Link to={to} className="menu-item">
                {children}
            </Link>
        );
    }

    return (
        <div className="dropdown">
            <DropdownItem to="/profile">Profile</DropdownItem>
            <DropdownItem to="/login">Login</DropdownItem>
        </div>
    );
}

