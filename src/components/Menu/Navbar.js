import { Nav, NavLink, NavMenu, Logo, Bars } from "./NavbarComponents";
import React, { useState, useEffect, useRef } from 'react';
import logo from '../../images/logoes/logo.svg'
import barsImage from '../../images/logoes/bars.png'

const MenuItems = [
    { title: "Home", url: "/" },
    { title: "Pictures", url: "/pictures" },
    { title: "Location", url: "/location" },
    { title: "Contact Us", url: "/contacts" }
]

const Navbar = () => {

    
    const [mobileMenu, toggleMenu] = useState(true)

    const handleToggle = () => {
        toggleMenu(!mobileMenu)
    }

    const ref = useRef()

    onClickOutside(ref, () => toggleMenu(true));

    function onClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }
              handler(event);
            };
            document.addEventListener("mousedown", listener);
            return () => {
              console.log("yo")
              document.removeEventListener("mousedown", listener);
            };
          }
        );
      }

    return (
        <Nav >
            <Logo src={logo} />
            <NavMenu ref={ref} className={`${mobileMenu ? "" : "mobile"}`} >
                {MenuItems.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            exact to={item.url}
                            onClick={mobileMenu ? () => { } : handleToggle}
                            activeClassName="active"
                        >
                            {item.title}
                        </NavLink>
                    )
                })}
            </NavMenu>
            <Bars
                onClick={handleToggle}
                src={barsImage} />
        </Nav>
    );
}

export default Navbar;