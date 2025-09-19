import React from 'react'
import Title from "../Components/Title";
import NewsletterBox from '../Components/NewsletterBox';
import { assets } from '../assets/frontend_assets/assets';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={" ABOUT "} text2={" US "}></Title>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p className='prata-regular'>At Forever, clothing is more than fabric stitched together — it’s the story you carry, the confidence you wear, and the memories you create.</p>
        <p>Our journey began with a simple dream: to build a brand that makes fashion timeless. We wanted to design pieces that don’t just follow trends but stay with you — season after season, moment after moment. Clothing that feels as personal as your favorite song, as lasting as your favorite memory.</p>
        <b className='text-gray-800 '> OUR MISSION </b>
        <p >Our mission is to create timeless clothing that celebrates individuality, embraces sustainability, and inspires confidence in every moment. We design with purpose, blending comfort, quality, and style in every piece. By empowering self-expression, we give our customers the freedom to wear their story with pride.</p>
      </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={" WHY "}  text2={" CHOOSE US "}></Title>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-5 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance : </b>
          <p className='text-gray-600'>Quality is at the heart of everything we do. Each piece is crafted with care, using premium fabrics and precise tailoring to ensure durability, comfort, and style. </p>
        </div>
        <div className="border px-5 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience : </b>
          <p className='text-gray-600'>We believe shopping should be as effortless as wearing your favorite outfit. Our online store is designed to give you a smooth, hassle-free experience. </p>
        </div>
        <div className="border px-5 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Your satisfaction is at the core of what we do. Our dedicated support team is always ready to assist you — whether it’s with sizing guidance, order tracking, or after-purchase care. </p>
        </div>
      </div>

      <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default About
