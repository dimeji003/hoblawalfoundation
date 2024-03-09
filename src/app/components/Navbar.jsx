"use client"
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function Navbar() {

    const router = useRouter()
  return (
    <div className='flex md:flex-row justify-between md:px-6 md:h-16 items-center border-b-2 border-blue-700'>
        <div>

        <Image src= '/homepicture.jpg' alt="hob lawal foundation" height={50} width={50} className='m-auto ' />
        </div>
        
        <ul className='flex flex-row gap-8 text-black text-xs'>
            <Link href='/'>
            <li>HOME</li>
            </Link>
            <li>ABOUT</li>
            <li>GALLERY</li>
            <Link href='/hoblawal' >
            <li className={router.pathname === "/hoblawal" ? "border-b-2 border-red-600" : ''}>ENGR H.O.B LAWAL</li>
            </Link>
            
            
        </ul>
        <div className='flex flex-row gap-2  p-3 rounded-3xl text-black border-2 border-blue-700 items-center text-sm'>Contact Us <IoIosArrowForward /></div>
    
    </div>
  )
}
