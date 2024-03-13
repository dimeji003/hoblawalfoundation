import React from 'react'
import Image from 'next/image'
import { IoIosCheckmarkCircle } from "react-icons/io";
import Link from 'next/link';

export default function Whoweare() {
  return (
    <div className=' py-20 bg-gray-100 px-9'>
        <div className='flex md:flex-row sm:flex-col flex-col justify-between gap-10 md:w-[90%] m-auto'>
            <div className='md:w-[50%] '>
                <Image src='/help.jpg' alt='help' height={100} width={300} className='w-[100%] h-72 border rounded-xl'/>
            </div>
            <div className='md:w-[50%] flex flex-col gap-3'>
                <p className='text-xs text-red-700'>WHO WE ARE</p>
                <h1 className='text-2xl font-semibold'>We&apos;re a Non-Profit Charity Foundation</h1>
                <p className='text-gray-500 text-xs'>Join us and make your life more valuable and useful, be a part of us and contribute to the nation and state in the simplest for the environment and yourself.</p>
                <ul className='text-xs flex flex-col gap-2'>
                    <li className='flex flex-row gap-2 items-center font-semibold'><IoIosCheckmarkCircle className='text-blue-600' />Support people in extreme need</li>
                    <li className='flex flex-row gap-2 items-center font-semibold'><IoIosCheckmarkCircle className='text-blue-600' />Make the world a better place</li>
                    <li className='flex flex-row gap-2 items-center font-semibold'><IoIosCheckmarkCircle className='text-blue-600' />Share love for community</li>
                    
                </ul>
                <Link href='/aboutus'>
                <button className='lg:mt-3 bg-blue-700 text-xs p-2 rounded-xl w-20 text-white text-center'>About Us</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
