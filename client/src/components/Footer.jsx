import React from 'react'
import {assets} from "../assets/frontend_assets/assets.js";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} alt='logo' className='w-32 mb-5'/>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        AURAWEAR redefines contemporary fashion with thoughtfully designed apparel
                        that blends comfort, quality, and timeless style. Where every piece tells
                        a story of modern elegance.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+234-813-808-1564</li>
                        <li>blakechima@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@Aurawear.com - All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer
