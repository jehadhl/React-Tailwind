import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStrated = () => {
  return (
    <div className={`${styles.flexCenter} 
    w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px]
     cursor-pointer`}>
      <div className={`${styles.flexCenter} w-[100%] h-[100%] flex-col rounded-full bg-primary flex-col`}>
        <div className={`${styles.flexCenter} flex-row`}>
          <p className='font-poppins font-medium text-[18px] mr-2'>
             <span className='text-gradient'>Get</span>  
          </p>  
          <img src={arrowUp} alt="arrow" className='h-[24px] w-[24px] object-contain'/>   
        </div>
        <p className='font-poppins font-medium text-[18px]'>
             <span className='text-gradient'>Started</span>  
          </p> 
      </div>
      </div>
  )
}

export default GetStrated