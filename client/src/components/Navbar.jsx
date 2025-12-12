import React, {useState} from 'react'
import {assets} from "../assets/frontend_assets/assets.js";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='flex justify-between items-center py-5 font-medium'>
            <Link to='/' className='flex items-center gap-2'>
                <img src={assets.logo} alt='logo' className='w-36 cursor-pointer' />
            </Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} alt='search icon' className='w-5 cursor-pointer'/>

                <div className='group relative'>
                    <img src={assets.profile_icon} alt='profile icon' className='w-5 cursor-pointer'/>
                    <div className='group-hover:block hidden absolute pt-4 right-0 dropdown-menu'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>

                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} alt='cart icon' className='w-5 min-w-5 cursor-pointer'/>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        10
                    </p>
                </Link>

                {/*Mobile Menu*/}
                <img
                    src={assets.menu_icon}
                    alt='menu icon'
                    className='w-5 sm:hidden cursor-pointer'
                    onClick={() => setVisible(true)}
                />
            </div>

            {/*Sidebar menu for small screens*/}
            <div className={`absolute  top-0 bottom-0 transition-all overflow-hidden bg-white ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img
                            src={assets.dropdown_icon}
                            alt='close-icon'
                            className='h-4 rotate-180'
                        />
                        <p>Back</p>
                    </div>

                    <div className='flex flex-col gap-4 '>
                        <NavLink onClick={()=> setVisible(false)} className='pl-6 py-2 border' to='/'>HOME</NavLink>
                        <NavLink onClick={()=> setVisible(false)} className='pl-6 py-2 border' to='/collection'>COLLECTION</NavLink>
                        <NavLink onClick={()=> setVisible(false)} className='pl-6 py-2 border' to='/about'>ABOUT</NavLink>
                        <NavLink onClick={()=> setVisible(false)} className='pl-6 py-2 border' to='/contact'>CONTACT</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Navbar
