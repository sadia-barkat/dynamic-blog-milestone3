'use client';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';
import React, {use} from 'react'

 const posts = [

    {id:'1',
      title: 'What are Online Earning Apps',
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
      description : "Incredible ways to earn through Upwork.!!!Online earning is a method to generate money by using  internet.It is a vast term which icludes number of ways to work upon which may be a website or game application.",
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
      description : "Your bright future is just beyond one click....!!!Online earning is a method to generate money by using source of internet.It is a vast term which icludes number of ways to work upon which may be a website or game application.",
     image:"../images/makemoney2.jpg",
     },  
  ]

export default function Post({params } : {params: {id:string}}) {
  const {id} = params ;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className='text-2xl font-bold text-center mt-10 '>Post not found</h2>
    );
  }
  const renderParagraph =(description :string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className=' max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>{post.title}</h1>
      {post.image && (
        <img 
        src={post.image}
        alt={post.title}
        className='w-full h-auto rounded-md mt-4 '/>
      )}
      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraph(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard/>
      
    </div>
  )
} 
