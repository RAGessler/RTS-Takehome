import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () =>{

    return(
        <div>
            <ul>
                <li>
                    <Link to="/History">History</Link>
                </li>
                <li>
                    <Link to="/Search">Search</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;