import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

export const Navbar = () => {
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [moblieMenu, SetMoblileMenu] = useState(false)
    const toggleMenu = ()=>{
        moblieMenu? SetMoblileMenu(false): SetMoblileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            {/* <img src={logo} alt="logo" className='logo' /> */}
                <h1 className='logo'>KOlUni</h1>


            <ul className={moblieMenu? '': 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}
