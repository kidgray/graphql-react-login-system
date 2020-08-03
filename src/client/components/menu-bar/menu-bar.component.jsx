import React from 'react'; 
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav menu-bar">
                    <Link className="nav-item nav-link" to="/login"> Login </Link>
                    <Link className="nav-item nav-link" to="/register"> Register </Link>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;