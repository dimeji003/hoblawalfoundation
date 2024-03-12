"use client"
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { RiMenu3Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";


export default function Navbar() {
  
  const [showNav, setShowNav] = useState()
  
  function navMenu(){
    setShowNav (!showNav)
  }

  function leaveNav(){
    setShowNav(false)
  }

    
  return (
    <div className='flex md:flex-row justify-between px-4 py-3 md:px-14 md:h-16 border-b-2 border-blue-600  items-center '>
        <div>

        <Image src= '/homepicture.jpg' alt="hob lawal foundation" height={50} width={50} className='m-auto ' />
        </div>
        
        <ul className={`flex md:flex-col lg:flex-row place-content-center bg-blue-50 z-50 w-[100%] items-center md:bg-white fixed left-0 lg:relative top-0 bottom-0 flex-col gap-11 md:text-blue-700 text-black md:text-xs text-xl transition-transform transform ease-in-out duration-500 ${showNav ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} `}>
            <MdCancel className='lg:hidden absolute top-3 right-3 text-3xl cursor-pointer' onClick={navMenu} />
            <Link href='/' onClick={leaveNav}>
            <li>HOME</li>
            </Link>
            <Link href='/aboutus' onClick={leaveNav}>
            <li>ABOUT</li>
            </Link>
            <Link href="/gallery" onClick={leaveNav}>
            <li>GALLERY</li>
            </Link>
            <Link href='/hoblawal' onClick={leaveNav} >
            <li>ENGR H.O.B LAWAL</li>
            </Link>
            <Link href='/contactus' onClick={leaveNav}>
            <li className='md:hidden'>CONTACT US</li>
            </Link>
            <Link href='/donate' onClick={leaveNav} className='bg-blue-700 lg:bg-transparent text-white lg:text-blue-700 lg:rounded-none rounded-2xl p-3 lg:p-0'>
            <li >DONATE</li>
            </Link>
            
            
        </ul>
        <Link href='/contactus' >
        <div className='lg:flex w-36 text-center flex-row gap-2 hidden   p-3 rounded-3xl text-black border-2 border-blue-700 items-center text-xs'>Contact Us <IoIosArrowForward /></div>
        </Link>
        <RiMenu3Fill className='text-2xl lg:hidden fill-blue-600 cursor-pointer' onClick={navMenu}/>
    
    </div>
  )
}

