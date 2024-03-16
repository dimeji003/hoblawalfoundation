import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='bg-blue-50 p-8 lg:p-0'>
        <div className='lg:w-[80%] m-auto'>
        <div className='border-b border-gray-400 flex gap-11 lg:justify-between lg:flex-row flex-col lg:px-5 py-6 lg:py-0  lg:h-48  items-center'>

        <div className='text-black text-xl font-bold'>HOBLAWAL Foundation</div>
        <div className='text-black'>
            <ul className='flex lg:flex-row lg:text-sm text-gray-500 flex-col gap-3 lg:gap-8 items-center'>
                <Link href='/'>
                <li>Home</li>
                </Link>
                <Link href='/aboutus'>
                <li>About</li>
                </Link>
                <Link href='/donate'>
                <li>Donate</li>
                </Link>
                <Link href='/gallery'>
                <li>Gallery</li>
                </Link>
                <Link href='/contactus'>
                <li>Contact Us</li>
                </Link>
            </ul>
        </div>
        <div >
            <h2 className=''>Follow us on</h2>
            <ul className='flex flex-row place-content-center'>
                <li><FaFacebookSquare className='text-blue-600' href='https://www.facebook.com/profile.php?id=100080090636438&mibextid=kFxxJD' /></li>
                <li></li>
            </ul>
        </div>
        </div>
        <div className='text-center flex lg:flex-row flex-col place-content-center items-center gap-2 lg:gap-10 py-7 '>
            <p>Site Developed by <span className='text-blue-500'>Lawal Oladimeji</span></p>
            <Link href='tel:08163901595'>
            <p className='flex flex-row items-center text-blue-500'><IoPhonePortraitSharp className='text-black'/>: 08163901595</p>
            </Link>
            <Link href='mailto:oladimejilawal14@gmail.com'>
            <p className='flex flex-row items-center text-blue-500'><IoMail className='text-black'/>: oladimejilawal14@gmail.com</p>
            </Link>
        </div>

        </div>
    </div>
   
  )
}
