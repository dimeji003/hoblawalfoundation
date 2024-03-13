import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
  return (
    <div className='bg-blue-50 py-4'>

        <div className='md:py-20  md:px-32 p-9 flex md:flex-row flex-col gap-10 justify-between'>
            <div className='flex flex-col gap-6'>
                <h1 className='font-bold text-2xl'>H.O.B LAWAL Foundation</h1>
                <p>16 oreta road, Igbogbo, Ikorodu</p>
                <div className='border-4 border-blue-600 w-[40%] rounded-lg'><Image src="/gallery5.jpg" height={200} width={200} /></div>
                
                
                
    
            </div>
    
             
    
            <div className='flex flex-row gap-24'>
                <div className='flex gap-7 flex-col'>
                    <h2>Navigation</h2>
                    <Link href="/aboutus">
                    <p className='mt-2 text-xs text-gray-500'>About Us</p>
                    </Link>
                    <Link href="/donate">
                    <p className='text-xs text-gray-500'>Donate</p>
                    </Link>
                    <Link href="/contactus">
                    <p className='text-xs text-gray-500'>Contact Us</p>
                    </Link>
                    <Link href="/">
                    <p className='text-xs text-gray-500'>Home</p>
                    </Link>
                </div>
                
                <div className='flex flex-col gap-3'>
                    <h2>Follow us on</h2>
                    <div className='flex flex-row gap-5 items-center'>
                    <Link href="https://www.facebook.com/profile.php?id=100080090636438&mibextid=kFxxJD">
                    <div><FaFacebookF className='text-blue-600'/></div>
                    </Link>
                    <div></div>
                    <div></div>
    
                    </div>
                </div>
            </div>
            
        
    
    
    
    
        </div>
        
                <p className='text-center text-xs flex lg:flex-row flex-col items-center gap-4 lg:w-[45%] m-auto text-gray-500 pt-8'>Site Developed by Lawal Oladimeji <Link href="tel:+2348163901595"><div className='flex flex-row items-center gap-1'><FaPhoneAlt className='text-blue-600'/>: <span>+(234)-816-390-1595</span></div></Link> <Link href="mailto:oladimejilawal14@gmail.com"><div className='flex flex-row items-center gap-1'><IoMdMailUnread className='text-blue-600'/><span>oladimejilawal14@gmail.com</span></div></Link> </p>
    </div>
  )
}
