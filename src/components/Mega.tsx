import React from 'react'
import BlogCard from './BlogCard'
import Image from 'next/image'
export default function Mega() {
  const posts = [

    {id:'1',
      title: 'Intro of Online Earning Apps',
      description : "Learn different  ways to earn through easiest online methods....!!!!!Online earning is a method to generate money by using source of internet.It is a vast term which icludes number of ways to work upon which may be a website,web store or game application.",
     image:"../images/image11.jpg",
     },  


    {id:'2',
      title: 'How to earn Money online?????',
      description : "Learn seven different  ways to make $5000 through easiest methods....!!!Online earning is a method to generate money by using source of internet.It is a vast term which icludes number of ways to work upon which may be a website,web store or game application.",
     image:"../images/EarnOnline1.png",
     },  

     

     {id:'3',
      title: 'Fiver',
      description : "Fiver....!!! A very strong platform for online earning....!!!Online earning is a method to generate money by using source of internet.It is a vast term which icludes number of ways to work upon which may be a website,web store or game application.",
     image:"../images/fiverr.jpg",
     },  

     {id:'4',
      title: 'Upwork',
      description : "Incredible ways to earn through Upwork....!!!Online earning is a method to generate money by using internet.It is a vast term which icludes number of ways to work upon which may be a website or game application.",
     image:"../images/upwork.png",
     },  

     {id:'5',
      title: 'People Per Hour',
      description : "How to grow on People per Hour....???????Online earning is a method to generate money by using source of internet.It is a vast term which icludes number of ways to work upon which may be a website,web store or game application.",
     image:"../images/peopleperhour.webp",
     },  

     {id:'6',
      title: 'Guru',
      description : "Guru Hoja Shuru....!!!Online earning is a method to generate money by using source of internet.It is a vast term which icludes number of ways to work upon which may be a website,web store or game application.",
     image:"../images/guruapp.webp",
     },  

     {id:'7',
      title: 'Online apps',
      description : "Get started on online apps..Online earning is a method to generate money by using source of internet.It is a vast term which icludes number of ways to work upon which may be a website,web store or game application.",
     image:"../images/MakeMoney.jpg",
     },  

     {id:'8',
      title: 'Tips for online apps',
      description : "Here are some useful tips for freshers....!!!Online earning is a method to generate money by using source of internet.It is a vast term which icludes number of ways to work upon which may be a website,web store or game application.",
     image:"../images/makemoney1.webp",
     },  

     {id:'9',
      title: 'Just one step ahead',
      description : "Your bright future is just beyond one click....!!!Online earning is a method to generate money by using source of internet.It is a vast term which icludes number of ways to work upon which may be a website or application.",
     image:"../images/makemoney2.jpg",
     },  
  ]
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>{" "}How to earn Money online?????</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index)=> (
          <div className='fade-in' key={post.id}>
            <div  className='blog-card'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
