import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-200 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:traslate-y-[-5px] hover:text-black text-red-600 '>
          Online Earning through Gadgets..!!
        </h2>

        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
          Hi!! Its Sadia..Join me to step into the world of IT...I'll create interesting blogs for you on your favourite topics.
          Nowadays Online earning is the easiest way to earn money.You can earn through joining these apps through your laptops or even with your mobile phones.
          It's the easiest way of earning.Just create your account on the apps 
          like Fiver , Upwork , People per hour etc and show your skills in the world of IT.</p>

          <div className='mx-auto max-w-7xl px-5'></div>
          <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change '> How to Earn $5000 through online apps????</h1>

          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
            {[
              "Fiver",
              "Upwork",
              "People Per Hour",
              "Linkedinn",
              "Tiktok",
              "Guru",
            ].map((category, index)=>(
              <div className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center  justify-center text-neutral-600'>
                <p className='text-center text-lg font-semibold '>{category}</p>
                <div className='absolute insert-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'>

                </div>

              </div>
            ))
            }
          </div>

      </section>
    </div>
  )
}
