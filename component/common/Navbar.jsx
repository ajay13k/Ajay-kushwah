import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (<>
    <div>
    <li>
    <NavLink activeClassName='active_class' to="/">About Us</NavLink>
    </li>
    <li>
    <NavLink activeClassName='active_class' to="/contact">Contect Us</NavLink>
    </li>
    <li>
    <NavLink activeClassName='active_class' to="/employee">Employee data</NavLink>
    </li>
    {/* <li>
    <NavLink  to="/attendance">Attendance</NavLink>
    </li> */}
    <li>
    <NavLink  to="/edit">Edit</NavLink>
    </li>
    </div>
    {/* <a href='/'>About US</a>
    <a href='/contact'>Contect US</a> */}
    
    </>);
}
 
export default Navbar;