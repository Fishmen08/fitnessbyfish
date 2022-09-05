import React, {useState} from "react";
import fbflogo from '../images/FBFlogo.png';
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from "./AuthContext";


export default function UserNav () {
    const [menu, setMenu] = useState(false);
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        setMenu(!menu)
        console.log(menu)
    }

    const handleUserClick = async (e) => {
        e.preventDefault();
        if (currentUser) {
            await logout();
            navigate('/login', {replace: true})
            console.log('you are logged out');
        } else {
            navigate('/login');
        }

    }

    return (
        <div className='fixed bg-black text-white w-screen top-0 flex-wrap'>
            {/* Main navbar */}
            <div className='md:flex hidden justify-around items-center h-16'>
                <div className='inline-flex items-center hover:scale-110'>
                <Link to='/dashboard'><img src={fbflogo} className='h-12'/></Link>
                {/* <h1 className='text-xl ml-5'>Fitness By Fish Personal Training</h1> */}
                </div>
                <div className='flex'>
                <ul className='inline-flex mr-8 space-x-4 items-center '>
                    <li className='hover:scale-110'><Link to='/workouts'>Workouts</Link></li>
                    <li className='hover:scale-110'><a>Other</a></li>
                    <li className='hover:scale-110'><Link to='/update-profile'>Update Profile</Link></li>
                </ul>
                <div className='space-x-4 md:text-sm'>
                    <button className='bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded' onClick={handleUserClick}>{currentUser ? 'Logout' : 'Login'}</button>
                    {/* <button className='bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded'>Get in Touch</button> */}
                </div>
                </div>
            </div>
            {/* mobile navbar */}
            <div className='md:hidden h-full'>
                <div className=' flex justify-between items-center '>
                <Link to='/' onClick={() => setMenu(false)}><img src={fbflogo} className='h-12 ml-5'/></Link>
                <button className='mr-5 bg-blue-500 font-bold py-2 px-4 rounded' onClick={handleClick}>Menu</button>
                </div>
                <div className='hidden w-screen z-100 pt-4 pb-4 space-y-2 divide-y' style={{display: menu ? 'block' : 'none' }} id='mobile-menu'>
                    <Link className='block pl-12' to='/workouts' onClick={() => setMenu(false)}>Workouts</Link>
                    <a className='block pl-12'>Other</a>
                    <a className='block pl-12'>Update Profile</a>
                    <a className='block pl-12' onClick={handleUserClick}>Logout</a>
                    {/* <a className='block'>Signup</a> */}
                </div>
            </div>
            
        </div>
    )
}