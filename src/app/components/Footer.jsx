import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className='md:py-20 bg-blue-50 md:px-32 p-9 flex md:flex-row flex-col gap-10 justify-between'>
        <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-2xl'>H.O.B LAWAL Foundation</h1>
            <p>16 oreta road, Igbogbo, Ikorodu</p>
            <h2 className='font-bold'>Newsletter</h2>
            <div className='border-b border-blue-600 flex flex-row items-center w-60 justify-between'><input type="email" className='bg-blue-50 text-sm py-1' placeholder='Input your email'/><GoArrowRight className='text-blue-700 font-extrabold' /></div>
            

        </div>

         

        <div className='flex md:flex-row flex-row gap-24'>
            <div className='flex gap-7 flex-col'>
                <h2>Navigation</h2>
                <p className='mt-2 text-xs text-gray-500'>About Us</p>
                <p className='text-xs text-gray-500'>Services</p>
                <p className='text-xs text-gray-500'>Contact Us</p>
                <p className='text-xs text-gray-500'>Home</p>
            </div>
            <div className='flex gap-7 flex-col'>
                <h2>Help</h2>
                <p className='mt-2 text-xs text-gray-500'>FAQ</p>
                <p className='text-xs text-gray-500'>Terms of use</p>
                <p className='text-xs text-gray-500'>Privacy policy</p>
            </div>
        </div>
        
    



            <div className='flex flex-col gap-3'>
                <h2>Follow us on</h2>
                <div className='flex flex-row gap-5 items-center'>
                <div><FaFacebookF className='text-blue-600'/></div>
                <div></div>
                <div></div>

                </div>
            </div>
    </div>
    
  )
}
