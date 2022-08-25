import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
         {stats.map((stats , index)=> (
            <div key={stats.id} className={`justify-start items-center flex flex-1 flex-row m-3`}>
                 <h4 className='font-poppins font-semibold text-white xs:text-[40px] text-[30px]
                  xs:leading-[53px] leading-[43px]'>{stats.value}</h4>
                 <p className='font-poppins font-normal text-gradient xs:text-[20px] text-[15px]
                  xs:leading-[26px] leading-[21px] uppercase ml-3'>{stats.title} {" | "} </p>
                  
            </div>
         ))}
    </section>
  )
}

export default Stats