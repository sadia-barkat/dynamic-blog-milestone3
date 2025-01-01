import React from 'react'
import Image from 'next/image'

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-5'>
      <div className='flex items-center animation-fadeIn'>
        <Image 
        src="/images/download.jpg"
        width={80}
        height={80}
        alt='author image'/>
        <div>
          <h3 className='text-xl font-bold'> Sadia Waqas</h3>
          <p className='text-blue-800'> {" "} SEO Expert | Web Develepor | Blogger
          </p>
        </div>
      </div>
      <p className='mt-4 text-black leading-relaxed'>Sadia Waqas is an experienced SEO expert and also blogger.Feel free to contact me.It is a blog about online earning apps.Kindly check it out.I am here to write SEO frinedly blog-post and articles on topic of your choice.</p>

      <div className=' mt-4 space-x-3'>
        <a href='#' className='px-4 py-2 text-white bg-black rounded-md hover:bg-blue-950 transition duration-300'>Linkedin</a>
        <a href='#' className='px-4 py-2 text-white bg-green-600 rounded-md hover:bg-blue-950 transition duration-300'>WhatsApp</a>
        <a href='#' className='px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-950 transition duration-300'>Facebook</a>


      </div>
    </div>
    
  )
}
