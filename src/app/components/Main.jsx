import React from 'react'
import Image from 'next/image'
import styles from './main.module.css'
import { FaHandBackFist } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { SiBookstack } from "react-icons/si";
import { GiLindenLeaf } from "react-icons/gi";

export default function page() {
  return (
    <div>
    <div className='flex md:flex-row flex-col gap-12 w-[90%] m-auto items-center py-8 pb-32 border-b border-gray-400 '>
        <div className='flex flex-col gap-3 w-[40%]'>
            <p className='text-red-700 text-xs font-bold'>MISSION</p> 
            <h1 className='text-3xl text-black m-auto font-bold '>Lets help and Make People Smile by <span className='text-red-700'>Giving</span></h1>
            <p className='text-sm text-gray-500'>Supporting various causes and initiatives aimed at creating positive social change.</p>
            <button className=' bg-blue-700 w-32 h-9 p-1 text-xs rounded-[6px] text-white md:mt-5'>DONATE NOW</button>
        </div>
        <div className='w-[50%]'><Image src= '/homepicture.jpg' alt="hob lawal foundation" height={200} width={200} className='w-[100%] h-72 m-auto md:mt-10 ' /></div>
        

      
      
    </div>
        

        <div className='grid grid-cols-3 gap-4 py-20 w-[80%] m-auto mt-[-140px]'>
            <div className='flex flex-col items-center gap-3 bg-gray-300 p-5 rounded-[4px]'>
            <FaHandBackFist className='text-5xl text-yellow-500' />
            <h2 className='flex flex-row gap-2 items-center'><GoDotFill className='text-red-700' />Empowerment<GoDotFill className='text-red-700'/></h2>
            <p className='text-sm text-gray-500 text-center'> Providing necessary tools for the skilled</p>

                
            </div>
            <div className='flex flex-col items-center gap-3 bg-gray-300 p-5 rounded-[4px]'>
                <SiBookstack className='text-5xl text-yellow-500'/>
                <h2 className='flex flex-row gap-2 items-center'><GoDotFill className='text-red-700'/>Scholarship<GoDotFill className='text-red-700'/></h2>
                <p className='text-sm text-gray-500'>Granting Scholarships to Indigents</p>
            </div>
            <div className='flex flex-col items-center gap-3 bg-gray-300 p-5 rounded-[4px]'>
            <GiLindenLeaf className='text-5xl text-yellow-500'/>
            <h2 className='flex flex-row gap-2 items-center'><GoDotFill className='text-red-700'/>Environment<GoDotFill className='text-red-700'/></h2>
            <p className='text-sm text-gray-500'>Helping to live life cleaner</p>


                
                </div> 


        </div>


    </div>
  )
}
