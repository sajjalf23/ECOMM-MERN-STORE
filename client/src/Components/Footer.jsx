import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
const Footer = () => {
    return (
        <>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div className="">
                    <img src={assets.logo} alt="" className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Hic itaque possimus error sint, asperiores dicta eveniet voluptatem minima
                        saepe eos fugit laborum quasi incidunt autem. Molestiae commodi ea nobis magnam!</p>
                </div>
                <div className="">
                    <p className='text-xl font-medium mb-5'>
                        COMPANY
                    </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>DELIEVERY</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-xl font-medium mb-5'>
                        GET IN TOUCH
                    </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li> + 1-312-451-5460</li>
                        <li>contact@forever.com</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <hr className='border-gray-300' />
                <p className='py-5 text-sm text-center text-gray-600'>
                    © 2025 Forever.com . All rights reserved.
                </p>
            </div>
        </>
    )
}

export default Footer
