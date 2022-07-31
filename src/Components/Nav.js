import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as ProjectLogo } from '../assets/logo.svg';
import { ReactComponent as MoviesIcon } from '../assets/icon-nav-movies.svg';
import { ReactComponent as TVSeriesIcon } from '../assets/icon-nav-tv-series.svg';
import { ReactComponent as NavHome } from '../assets/icon-nav-home.svg';


function Nav() {   
    return(
        <nav className='nav'>
            <div id='logo'>
                <ProjectLogo />
            </div>
            <div id='main-icons'>
                <Link to="/AllMedia">
                    <NavHome />
                </Link>
                <Link to="/Movies">
                    <MoviesIcon />
                </Link>
                <Link to="/TV">
                    <TVSeriesIcon />
                </Link>
            </div>
            <div id='profile-avatar'>
                <img src='/image-avatar.png' alt='image avatar' className='profile-avatar'/>
            </div>
        </nav>
    )
}

export default Nav