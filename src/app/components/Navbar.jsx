"use client"
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function Navbar() {

    const router = useRouter()
  return (
    <div className='flex md:flex-row justify-between md:px-24 md:h-16 border-b-2 border-blue-600  items-center '>
        <div>

        <Image src= '/homepicture.jpg' alt="hob lawal foundation" height={50} width={50} className='m-auto ' />
        </div>
        
        <ul className='flex flex-row gap-11 text-blue-700 text-xs '>
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
