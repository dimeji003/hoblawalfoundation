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
    
    <div className={` flex place-content-centergap-12 m-auto max-h-[130vh]  h-[80vh] border-b-2 border-gray-400 place-content-center lg:px-16    lg:pt-36 md:pt-72 md:px-7 px-4 pt-40 py-56 ${styles.main}`}>
        
        <div className='flex flex-col gap-3 lg:w-[100%]  place-content-center'>
            <p className='text-yellow-500 text-xl lg:text-2xl md:text-3xl font-extrabold'>AT HOB LAWAL FOUNDATION..</p> 
            <h1 className='md:text-3xl text-2xl text-white pt-7  font-bold md:w-[75%] lg:w-[85%] lg:pt-10  '>We strive to help and make people smile by <span className='text-yellow-500'>Giving</span></h1>
            <p className='text-sm md:text-[16px] text-gray-200 md:w-[70%] '>Through collaborative efforts and sustainable initiatives, we strive to empower individuals and foster positive social change, ultimately creating a more equitable and inclusive society.</p>
            <Link href='/donate' className='cursor-pointer'>
            <button className=' bg-blue-800 lg:w-[150px]  md:p-3 p-2 text-xs md:text-sm rounded-[6px] md:mt-9 text-white mt-4 lg:mt-5'>DONATE NOW</button>
            </Link>
        </div>

        
         
        

      
      
    </div>
        

  )
}
