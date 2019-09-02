import React from 'react';
import { Link } from 'react-router-dom';
//css
import '../../css/components/Header.css';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark teal mb-4">
        <Link className="navbar-brand"  to="/">AMDOCS project</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/users">Users<span className="sr-only">(current)</span></Link>
                </li>
            </ul>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </form>
        </div>
    </nav>
  </header>
);

export default Header;
