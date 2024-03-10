import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

export default function Subnav(){
  return (
    <div className='md:flex hidden flex-row h-8 justify-between px-24 bg-blue-700'>
        <div className='flex flex-row gap-10 items-center text-white text-xs'>
            <div className='flex flex-row items-center gap-3'><FaPhoneAlt /> +(234)-805-708-2893</div>
            <div className='flex flex-row items-center gap-3'><IoMdMailUnread />hoblawalfoundation@gmail.com</div>
        </div>
        <div className='flex flex-row gap-5 items-center text-white'>
        <FaFacebookF />
        <BsInstagram />
        <FaWhatsapp />

        </div>
    </div>
  )
}
