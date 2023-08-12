import React from 'react'
import './Header7.css'




export default function Header7() {
    return (
        <div className='header7'>
            <div className='video__box'>
                <video controls>
                    <source src='./../../../public/Videos/back1.mp4.mp4' type="video/mp4" />
                </video>
            </div>

            {/* <div className='Container7'>
                <div className='navBar'>
                    <a href='#' className='Logo'>City</a>
                    <ul className='navbar_items'>
                        <li className='navbar__item'>Home</li>
                        <li className='navbar__item'>Servises</li>
                        <li className='navbar__item'>Contact</li>
                        <li className='navbar__item'>About</li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}
