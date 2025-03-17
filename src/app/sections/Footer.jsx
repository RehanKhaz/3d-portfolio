import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='padding '>
        <div className=' w-full border-neutral-400 py-4 flex-row max-md:flex-col flex-between gap-3 border-t-[1px]  '>
            <p className='text-[1em] text-neutral-400 font-medium'>
                Terms & Conditions | Privacy Policy 
            </p>
            <div className='flex-center gap-x-4 text-neutral-400'>
                <Link target='blank' href={'https://github.com/RehanKhaz'} className='flex-center p-2 rounded-full bg-[#1C1C21]'>
                    <Image src={'/assets/github.svg'} alt='github' width={24} height={24} />
                </Link>
                <Link target='blank' href={'https://www.linkedin.com/in/rehan-khan-31bb062b4/'} className='flex-center p-2 rounded-full bg-[#1C1C21]'>
                    <FaLinkedin className='size-4 ' />
</Link>
            </div>
            <p className='text-[1em] text-neutral-400 font-medium'>
                &copy; 2025 Rehan Khan. All Rights Reserved
            </p>

        </div>

    </footer>
  )
}

export default Footer