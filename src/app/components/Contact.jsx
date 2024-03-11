import React from 'react'
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className='lg:flex hidden md:flex-row items-center h-28 w-[100%] '>
        <div className='flex flex-row items-center bg-blue-50 h-[100%] w-[33%] place-content-center gap-6'>
            <div>
              <IoPhonePortraitSharp className='bg-white rounded-[50%] p-4 text-5xl' />

            </div>
            <div>
                <p className='text-gray-500 text-xs'>Phone</p>
                <h2>+(234)-805-708-2893</h2>
            </div>

        </div>
        <div className='flex flex-row items-center bg-blue-100 h-[100%] w-[34%] gap-6 place-content-center'>
            <div>
            <IoMail className='bg-white rounded-[50%] p-4 text-5xl'/>

            </div>
            <div>
                <p className='text-gray-500 text-xs'>Email</p>
                <h2>hoblawalfoundation@gmail.com</h2>
            </div>
        </div>
        <div className='flex flex-row items-center bg-blue-200 h-[100%] w-[33%] place-content-center gap-6'>
            <div>
            <IoLocationSharp className='bg-white rounded-[50%] p-4 text-5xl'/>

            </div>
            <div>
                <p className='text-gray-500 text-xs'>Address</p>
                <h2>16 oreta road, Ikorodu, Lagos.</h2>
            </div>
        </div>
    </div>
  )
}
