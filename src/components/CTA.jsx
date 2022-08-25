import React from 'react'
import styles from '../style'
import Button from './Button'

const Cta = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} bg-black-gradient-2 
    rounded-[20px] box-shadow sm:flex-row flex-col mt-20`}>
      <div className='flex-1'>
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )
}

export default Cta