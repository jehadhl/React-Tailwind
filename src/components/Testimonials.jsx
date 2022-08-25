import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import { quotes } from '../assets'


const FeedbackCrad= ({content , name, title ,img}) => (
  <div className='flex justify-between flex-col px-10 py-12 
  rounded-[20px] max-w-[370px] feedback-card my-5 mr-0 md:mr-10 sm:mr-5'>
      <img src={quotes} alt="doble" className="w-[42px] h-[27px]"/>
      <p className={`text-white font-poppins font-normal text-[18px] leading-[32px] my-10`}>{content}</p>
      <div className='flex flex-row'>
         <img src={img} alt="image-person" className='w-[50px] h-[50px] rounded-full'/>
         <div className='flex flex-col ml-4'>
           <h4  className={`font-poppins font-semibold text-[20px] leading-[32px] text-white`}>{name}</h4>
           <p className={`text-dimWhite font-poppins font-normal text-[16px] leading-[24px]`}>{title}</p>
         </div>
      </div>
  </div>
)



const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
          <div className='blue__gradient absolute w-[70%] h-[80%] z-[0] rounded-full -right-[50%]'/>

     <div className='w-full flex justify-between items-center 
      md:flex-row flex-col sm:mb-12 mb-12 relative z-[1]'>
      <h2 className={styles.heading2}>
        What people are <br className='sm:block hidden'/>
        saying about us
      </h2>
      <div className='w-full md:mt-0 mt-6'>
             <p className={`${styles.paragraph} text-left max-w-[450px] `}>
             Everything you need to accept card payments and grow your 
             business anywhere on the planet.
             </p>
      </div>
     </div>

     <div className='flex flex-wrap sm:justify-start justify-center w-full 
     feedback-container relative z-[1]'>
         {feedback.map((feedback , index) => (
           <FeedbackCrad key={feedback.id} {...feedback} />
         ))}
     </div>
    </section>
  )
}

export default Testimonials