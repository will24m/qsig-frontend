import React from 'react'

const Button = (props) => {
  return (
    <a href={props.url} className='cursor-pointer group relative w-fit h-[70px] bg-primary flex justify-center items-center rounded-[100px] overflow-hidden max-lg:h-[60px] max-md:h-[50px] max-sm:h-[40px] max-xsm:h-[30px]'>
        <div className="absolute inset-0 w-0 bg-logo_color transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <p className='relative font-poppins font-medium text-white text-[28px] px-[50px] max-lg:text-[24px]  max-lg:px-[40px] max-md:text-[20px] max-md:px-[35px] max-sm:text-[16px] max-sm:px-[25px] max-xsm:text-[12px] max-xsm:px-[20px]'>{props.text}</p>
    </a>
  )
}

export default Button