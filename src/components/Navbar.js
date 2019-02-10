import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let currentPage = window.location.pathname.substring(1)
    let pages = ['Clients', 'Actions', 'Analytics']
    return (
        <div id="nav">
            {pages.map((page, index) => currentPage === page ?
                <Link key={index} to={page} className="active">{page}</Link> :
                <Link key={index} to={page}>{page}</Link>)}
        </div>
    );
}

export default Navbar;

