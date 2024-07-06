import { Search, Notifications, ArrowDropDown } from '@mui/icons-material'
import React, { useState } from 'react'
import './navbar.css'

export default function navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className='container'>
                <div className='navbar-left'>
                    <img className='navbar-left__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <ul className="navbar-left__navigation">
                        <li className="navbar-navigation__item">HomePage</li>
                        <li className="navbar-navigation__item">Series</li>
                        <li className="navbar-navigation__item">Movies</li>
                        <li className="navbar-navigation__item">New And Popular</li>
                        <li className="navbar-navigation__item">My List</li>
                    </ul>
                </div>
                <div className='navbar-right'>
                    <Search className='margin-right__icon' />
                    <span>KID</span>
                    <Notifications className='margin-right__icon' />
                    <img className='navbar-right__img' src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="navbar-right__profile">
                        <ArrowDropDown className='navbar-profile__icon' />
                        <div className="navbar-profile__container">
                            <span className='navbar-profile__title'>Settings</span>
                            <span className='navbar-profile__title'>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
