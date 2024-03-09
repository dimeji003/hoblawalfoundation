import React from 'react'
import { GoArrowRight } from "react-icons/go";

export default function Footer() {
  return (
    <div className='py-20 bg-blue-50 px-11 flex flex-row justify-between'>
        <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-2xl'>H.O.B LAWAL Foundation</h1>
            <p>7 oreta road, Ikorodu</p>
            <h2 className='font-bold'>Newsletter</h2>
            <div className='border-b border-blue-600 flex flex-row items-center w-60 justify-between'><input type="email" className='bg-blue-50 text-sm py-1' placeholder='Input your email'/><GoArrowRight className='text-blue-700 font-extrabold' /></div>
            

        </div>
        <div className='flex flex-row gap-14'>
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
            <div>
                <h2>Follow us on</h2>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}
