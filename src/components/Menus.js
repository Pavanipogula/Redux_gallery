import React from "react";
import './Menus.css';
import { Link } from 'react-router-dom'
const buttonStyle = { textDecoration: 'none', color: 'white'}
function Menus() {
    return (
    <ul class = "menus">
    <li class="item"><Link style={buttonStyle} to="/mountain">Mountain</Link></li>
    <li class="item"><Link style={buttonStyle} to="/beach">Beach</Link></li>
    <li class="item"><Link style={buttonStyle} to="/bird">Bird</Link></li>
    <li class="item"><Link style={buttonStyle} to="/food">Food</Link></li>
    </ul>
    )
}
export default Menus;