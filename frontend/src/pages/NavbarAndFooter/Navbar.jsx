import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand m-1" to="/">Watchlist App</Link>
            <button
                className="navbar-toggler m-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active m-1">
                        <Link className="nav-link" to='/'><strong>Homepage</strong></Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="nav-link" to='/searchpage'><strong>Search</strong></Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="nav-link" to='/watchlist'><strong>Watchlist</strong></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
