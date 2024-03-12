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

        <div className='flex lg:flex-row flex-col gap-32 rounded-xl lg:w-[80%] w-[90%] md:w-[60%] m-auto mt-11 p-10 bg-blue-800'>
            <div className='flex flex-col p-4'>
                <h1 className='text-2xl font-bold text-white'>Contact Information</h1>
                <p className='text-sm font-light text-gray-400 mt-1'>Say something to start a live chat</p>
                <div className='flex flex-col gap-10 mt-16'>

                 <div className='flex flex-row md:gap-11 gap-5 items-center text-white'><FaPhoneAlt /> <p className='text-xs'>+(234)-805-708-2893</p></div>
                 <div className='flex flex-row md:gap-11 gap-5 items-center text-white'><IoMdMailUnread /><p className='text-xs'>hoblawalfoundation@gmail.com</p></div>
                 <div className='flex flex-row md:gap-11 gap-5 items-center text-white'><IoLocationSharp /><p className='text-xs'>16 oreta road, Igbogbo, Ikorodu.</p></div>
                </div>
                <div className='flex flex-row gap-11 mt-10'><Link href='https://www.facebook.com/profile.php?id=100080090636438&mibextid=kFxxJD' className='bg-blue-400 rounded-full p-3'><span ><FaFacebookF /></span></Link><span className='bg-blue-400 rounded-full p-3'><BsInstagram /></span><span className='bg-blue-400 rounded-full p-3'> <FaWhatsapp /></span></div>
            </div>
            <div className='bg-white m-auto py-5 px-5  lg:px-9 w-[90%] rounded-xl flex flex-col gap-6'>
                <div className='w-[100%] m-auto'>
                    <p className='text-sm'>Your Name</p>
                    <input type="text" className='border border-gray-400 rounded-[5px] w-[100%]'/>
                </div>
                <div>
                    <p className='text-sm'>Mail</p>
                    <input type="email" className='border border-gray-400 rounded-[5px] w-[100%]'/>
                </div>
                <div>
                    <p className='text-sm'>Message</p>
                    <input type="text" className='border border-gray-400 rounded-[5px] bg-gray-100 p-2 h-28 text-xs w-[100%]' placeholder='Message'/>
                    
                </div>
                <div className='text-center float-right text-xs p-2 rounded-lg  bg-blue-500 w-36'>Send Message</div>
            </div>
        </div>
    </div>
  )
}

        
       