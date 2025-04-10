
import { useState } from 'react'; 
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/newlogo.png';



export const Navbar = () => {

    const [showNav, setShowNav] = useState(true);

    const handleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <div className='text-[black] flex justify-between items-center h-16 bg-[white] px-8 md:px-12'>
        
        <div className='w-[200px] h-[200px] cursor-pointer mt-20'>
                    <img src={logo} alt="LOGO" />
                </div>
        
                <ul className='hidden md:flex justify-between gap-8 font-Lato'>

                
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about_us">About us</NavLink></li>
                    
                {/* <li><NavLink to="/services"> */}
                <li><NavLink>
                    Services<span className='arrow'></span></NavLink>
                    <ul className='dropdown'>
                    <li><NavLink to="/rsvp">RSVP</NavLink></li>
                    <li><NavLink to="/e-invite1">E-invite</NavLink></li>
                    <li><NavLink to="/live_streaming">Live Streaming</NavLink></li>
                    <li><NavLink to="/create_wallet">Create Wallet</NavLink></li>
                    <li><NavLink to="/spray_pattern">Spray pattern</NavLink></li>
                    </ul>
                    </li>

                    
                    <li><NavLink to="/events">Events</NavLink></li>
                    
                    
                </ul>

                
        
        <div className='hidden md:flex justify-between gap-4 m-3 font-Lato'>
            <button className='bg-[#023d3d] px-6 rounded-lg py-2 text-white'><NavLink to="/sign_up_page">Sign up</NavLink></button>
            <button className='bg-transparent border-[#f7a437] border px-6 rounded-lg py-2 text-[#AA6E00]'><Link to="/login_page">Log In</Link></button>
        </div>
        
        <div className='md:hidden' onClick={handleNav}>
            {!showNav? <IoClose size={20} className='cursor-pointer' /> : <IoMenu size={30} className='cursor-pointer' /> }
       
        </div>
       
        {/* Mobile Navbar */}
        <div className={!showNav? 'z-10 left-[0%] fixed top-[0%] w-[60%] bg-[white] h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
     
        <div className='w-[100px] h-[100px] cursor-pointer'>
                    <img src={logo} alt="LOGO" />
                </div>

            <ul className='m-3 gap-6 font-Lato font-bold uppercase pt-2'>
                <li className='pb-2 border-b border-gray-500'><NavLink to="/">Home</NavLink></li>
                <li className='pb-2 border-b border-gray-500'><NavLink to="/about_us">About us</NavLink></li>
                
                <li className='pb-2 border-b border-gray-500'><NavLink to="/events">Events</NavLink></li>
                
                <li className='pb-2 border-b border-gray-500'><NavLink to="/services">Services<span className='arrow'></span></NavLink>
                    <ul className='dropdownm'>
                    <li><NavLink to="/rsvp">RSVP</NavLink></li>
                    <li><NavLink to="/e-invite1">E-invite</NavLink></li>
                    <li><NavLink to="/live_streaming">Live Streaming</NavLink></li>
                    <li><NavLink to="/create_wallet">Create Wallet</NavLink></li>
                    <li><NavLink to="/spray_pattern">Spray pattern</NavLink></li>
                    </ul>
                    </li>
            </ul>
            

        <div className='space-y-4 mt-32'>
           
            <button className='bg-[#023d3d] px-6 rounded-lg py-2 text-white m-auto w-full font-bold'><NavLink to="/sign_up_page">Sign up</NavLink></button>
            <button className='bg-transparent border-[#f7a437] border px-6 rounded-lg py-2 text-[#AA6E00] m-auto w-full font-bold'><Link to="/login_page">Log In</Link></button>
        </div>
        
        </div>
        </div>
    )
}