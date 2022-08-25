import React from 'react'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart}
      flex-col md:flex-row mb-8 w-full`}>
        <div className='flex flex-1 flex-col justify-start mr-10'>
          <img 
          src={logo}
          alt="hoobank"
          className={`w-[270px] h-[72px] object-contain`}
          />
          <p className={`${styles.paragraph} mt-4 max-w-[340px]`}>
          A new way to make the payments easy,
           reliable and secure.
          </p>
        </div>
        <div className='flex-[1.5] flex flex-row w-full mt-10 md:mt-0 flex-wrap justify-between'>
           {footerLinks.map((footer ,index) => (
            <div className=' flex flex-col my-4 min-w-[150px] ss:my-0' key={footer.key} >
             <h4 className="font-poppins font-medium text-[20px] leading-[27px]
              text-white ">
              {footer.title}
             </h4>
             <ul className='list-none mt-4'>
             {footer.links.map((link , index) =>(
              <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px]
              text-dimWhite hover:text-secondary cursor-pointer ${index !== footer.links.length -1 ? "mb-4" : "mb-0"}`}>
                {link.name}
              </li>
             ))}
             </ul>
             </div>
           ))}
        </div>
      </div>

      <div className='flex w-full flex-col sm:flex-row justify-between items-center pt-6 
      border-t-[1px] norder-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-[18px] text-white text-center leading-[28px]'>
            CopyRight : 2021 HooBank. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social , index) => (
            <img 
            key={social.id}
            alt="lo"
            src={social.icon}
            className={`w-[23px] h-[23px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? "mr-6" :" mr-0"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )


export default Footer