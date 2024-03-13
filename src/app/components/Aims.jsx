import React from 'react'
import { FaHandBackFist } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { SiBookstack } from "react-icons/si";
import { GiLindenLeaf } from "react-icons/gi";

export default function Aims() {
  return (
    <div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 py-20 w-[80%] m-auto lg:mt-[-150px] mt-[-150px]'>
            <div className='flex flex-col items-center gap-3 bg-blue-500 p-5 rounded-[4px] shadow-xl'>
            <FaHandBackFist className='text-5xl text-white' />
            <h2 className='flex flex-row gap-2 items-center'><GoDotFill className='text-red-700' />Empowerment<GoDotFill className='text-red-700'/></h2>
            <p className='text-sm text-black text-center'> Providing necessary tools for the skilled</p>

                
            </div>
            <div className='flex flex-col items-center gap-3  p-5 rounded-[4px] bg-yellow-500 shadow-xl'>
                <SiBookstack className='text-5xl text-white'/>
                <h2 className='flex flex-row gap-2 items-center'><GoDotFill className='text-red-700'/>Scholarship<GoDotFill className='text-red-700'/></h2>
                <p className='text-sm text-black text-center'>Granting Scholarships to Indigents</p>
            </div>
            <div className='flex flex-col items-center gap-3 bg-red-400 p-5 rounded-[4px] shadow-xl'>
            <GiLindenLeaf className='text-5xl text-white'/>
            <h2 className='flex flex-row gap-2 items-center'><GoDotFill className='text-red-700'/>Environment<GoDotFill className='text-red-700'/></h2>
            <p className='text-sm text-black text-center'>Helping to live life cleaner</p>


                
            </div> 


        </div>
    </div>
  )
}
