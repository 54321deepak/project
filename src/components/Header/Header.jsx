import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='nav'>
                <div className='nav-start'>
                    <div className='logo'>
                        <img className='logo-img' src={logo} />
                    </div>
                    <div className='title'>Landguru</div>
                </div>

                <div className='nav-middle-topics'>
                    <li className='nav-middle-title home'>Home</li>
                    <li className='nav-middle-title advertise'>Advertise</li>
                    <li className='nav-middle-title supports'>Supports</li>
                    <li className='nav-middle-title contact'>Contact</li>
                </div>

                <div className='nav-end'>
                    <div className='try'>try for free</div>
                </div>
            </div>

            <div className='detail'>
                <div>
                    <div className='fa fa-star'></div>
                </div>
            </div>
        </div>
    )
}

export default Header