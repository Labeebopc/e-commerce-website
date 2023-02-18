import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'


const Header = () => {
    return (
        <>
            <nav className='header-container'>
                <Link className='header-logo' to="/">amazona</Link>
            </nav>
        </>
    )
}

export default Header;