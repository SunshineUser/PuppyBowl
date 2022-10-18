import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav>
            {/* use link element to create links for navbar being sure to use to*/}
            <Link to="puppies">All Puppies</Link>
            <Link to="settings">Settings</Link>
            <Link to="about">About Us</Link>
            
            
        </nav>

    )
};

export default Navbar;