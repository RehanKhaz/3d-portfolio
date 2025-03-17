import React from 'react'

const Button = ({ containerClass , href, beam = false, title }) => {
  return (
    <button className={`${containerClass} bg-[#1C1C21] font-normal text-[1em] tracking-wider  text-white px-16 max-md:px-8 py-2 rounded-md`}>
      {
        beam && <div className=' relative mx-4 inline-flex rounded-full h-3 w-3 bg-green-500
'>
          <p className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75;
'/>
        </div>
      }
      <a href={`#${href}`}>
        {title
        }
      </a>
    </button>
  )
}

export default Button