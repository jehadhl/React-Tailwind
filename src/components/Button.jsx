import React from 'react'

const Button = (props) => {
  return (
    <button type='button' className={`bg-blue-gradient 
    px-6 py-4 font-poppins font-medium text-[18px] text-primary outline-none ${props.styles} rounded-[10px]`}>
       Get Started
    </button>
  )
}

export default Button