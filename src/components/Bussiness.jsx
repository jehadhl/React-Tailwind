import React from 'react'
import styles , {layout} from '../style'
import { features } from '../constants'
import Button from './Button'

const FeatureCard = ({icon , title ,content ,index})=> (
   <div className={`rounded-[20px] flex flex-row p-6 feature-card ${index !== features.length - 1 ? "mb-16 " :"mb-0"}`}>
     <div className={`w-[84px] h-[84px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain image'/>
     </div>
     <div className='flex-1 flex flex-col ml-3'>
       <h4 className='font-poppins font-semibold text-[18px] text-white leading-[23px] mb-1'>
        {title}
       </h4>
       <p className='font-poppins font-normal text-[16px] text-dimWhite leading-[23px] mb-1'>
        {content}
       </p>
     </div>
   </div>
)

const Bussiness = () => (
    <section id='features' className={layout.section}>
          <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>
                you do the business,
                <br className='sm:block hidden'/>
                we'll handle the money.
              </h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. 
              But with hundreds of credit cards on the market.
              </p>
              <Button styles="mt-10"/>
          </div>

          <div className={`${layout.sectionImg} flex-col`}>
              {features.map((fatures , index)=>(
                <FeatureCard key={fatures.id} index={index} {...fatures}/> 
              )  
              )}
               {console.log(features.length -1)} 
          </div>
    </section>
  )


export default Bussiness