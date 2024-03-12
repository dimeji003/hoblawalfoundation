import React from 'react'
import Image from 'next/image'
import styles from './main.module.css'
import { FaHandBackFist } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { SiBookstack } from "react-icons/si";
import { GiLindenLeaf } from "react-icons/gi";
import Link from 'next/link';

export default function page() {
  return (
    <div>
    <div className='px-9 flex md:flex-row flex-col gap-12 md:gap-5 m-auto items-center lg:px-24 md:w-[95%] py-8 pb-32 border-b-2 border-gray-400 place-content-center'>
        <div className='flex flex-col gap-3 lg:w-[40%] md:w-[60%]'>
            <p className='text-red-700 text-xs font-bold'>MISSION</p> 
            <h1 className='text-3xl text-black m-auto font-bold '>Lets help and Make People Smile by <span className='text-red-700'>Giving</span></h1>
            <p className='text-sm text-gray-500'>Through collaborative efforts and sustainable initiatives, we strive to empower individuals and foster positive social change, ultimately creating a more equitable and inclusive society.</p>
            <Link href='/donate' className='cursor-pointer'>
            <button className=' bg-blue-800 w-32 h-9 p-1 text-xs rounded-[6px] text-white md:mt-5'>DONATE NOW</button>
            </Link>
        </div>
        <div className='md:w-[70%] lg:h-64 lg:w-[40%] '><Image src= '/homepicture.jpg' alt="hob lawal foundation" height={300} width={200} className='w-[90%] md:w-[80%] lg:w-[100%] md:h-72 lg:h-[100%] m-auto  ' /></div>
        

      
      
    </div>
        

        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 py-20 w-[80%] m-auto mt-[-140px]'>
            <div className='flex flex-col items-center gap-3 bg-blue-100 p-5 rounded-[4px] shadow-xl'>
            <FaHandBackFist className='text-5xl text-blue-700' />
            <h2 className='flex flex-row gap-2 items-center'><GoDotFill className='text-red-700' />Empowerment<GoDotFill className='text-red-700'/></h2>
            <p className='text-sm text-gray-500 text-center'> Providing necessary tools for the skilled</p>

                
            </div>
            <div className='flex flex-col items-center gap-3  p-5 rounded-[4px] bg-yellow-100 shadow-xl'>
                <SiBookstack className='text-5xl text-blue-700'/>
                <h2 className='flex flex-row gap-2 items-center'><GoDotFill className='text-red-700'/>Scholarship<GoDotFill className='text-red-700'/></h2>
                <p className='text-sm text-gray-500'>Granting Scholarships to Indigents</p>
            </div>
            <div className='flex flex-col items-center gap-3 bg-red-100 p-5 rounded-[4px] shadow-xl'>
            <GiLindenLeaf className='text-5xl text-blue-700'/>
            <h2 className='flex flex-row gap-2 items-center'><GoDotFill className='text-red-700'/>Environment<GoDotFill className='text-red-700'/></h2>
            <p className='text-sm text-gray-500'>Helping to live life cleaner</p>


                
                </div> 


        </div>


    </div>
  )
}
