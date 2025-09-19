import React from 'react'
import Title from "../Components/Title"
import { assets } from '../assets/frontend_assets/assets';

const Contact = () => {
  return (
    <div >
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={" US"}></Title>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className="flex flex-col items-start gap-6 justify-center">
          <p className='font semi-bold text-xl text-gray-600'> Our Store </p>
          <p className='text-gray-500'>123 Fashion Avenue, Suite 405 <br />
            Style District, New York, NY 10001 <br />
            United States</p>
          <p className='text-gray-500'> Tel : +1 (555) 123-4567 </p>
          <p className='text-gray-500'> Email :  support@foreverclothing.com </p>
          <p className='font-semibold text-xl text-gray-600'> Careers at Forever </p>
          <p className='text-gray-500'> Learn more about our team and job openings </p>
          <b className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white
          transition-all duration-500'> Explore Jobs </b>
        </div>
      </div>

    </div>
  )
}

export default Contact
