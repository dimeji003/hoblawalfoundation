import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link';

export default function page() {
  return (
    <div className='py-8'>
        <h1 className='text-center font-bold text-2xl'>Contact Us</h1>
        <p className='text-sm text-gray-600 text-center'>Any question or remarks? Just write us a message</p>

        <div className='flex lg:flex-row flex-col gap-32 rounded-xl lg:w-[40%] w-[90%] md:w-[60%] m-auto mt-11 p-10 bg-blue-800'>
            <div className='flex flex-col p-4 w-[67%] m-auto'>
                <h1 className='text-3xl font-bold text-white'>Contact Information</h1>
                <p className='text-lg font-light text-gray-400 mt-1'>Say something to start a live chat</p>
                <div className='flex flex-col gap-10 mt-16'>

                    <Link href="tel:+(234)-805-708-2893">
                 <div className='flex flex-row md:gap-11 gap-5 items-center text-white'><FaPhoneAlt /> <p className='text-sm'>+(234)-805-708-2893</p></div>
                    </Link>
                

                 <Link href="mailto:hoblawalfoundation@gmail.com">
                 <div className='flex flex-row md:gap-11 gap-5 items-center text-white'><IoMdMailUnread /><p className='text-sm'>hoblawalfoundation@gmail.com</p></div>
                 </Link>
                 <div className='flex flex-row md:gap-11 gap-5 items-center text-white'><IoLocationSharp /><p className='text-sm'>16 oreta road, Igbogbo, Ikorodu.</p></div>
                </div>
                <div className='flex flex-row gap-11 mt-10'><Link href='https://www.facebook.com/profile.php?id=100080090636438&mibextid=kFxxJD' className='bg-blue-400 rounded-full p-3'><span ><FaFacebookF /></span></Link><span className='bg-blue-400 rounded-full p-3'><BsInstagram /></span><span className='bg-blue-400 rounded-full p-3'> <FaWhatsapp /></span></div>
            </div>
            
        </div>
    </div>
  )
}

        
       