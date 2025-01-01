import React from 'react'
import {  CardContent, CardTitle } from "../components/ui/card";
import { Card } from '../components/ui/card';
 
interface BlogCardProps {
  post:{id:string; title: string; description:string; image:string};
  isDarkBackground: boolean;
 } 

export default function BlogCard( { post, isDarkBackground}: BlogCardProps) {
  return(
    <Card className= {'p-4 text-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'}>
    <img
    src={post.image}
    alt={post.title}
    className='w-full h-48 object-cover rounded-t-lg'
    />
    <CardTitle className='text-xl font-normal mt-4 text-center'>{post.title}</CardTitle>
    <br/>
    <CardContent className='text-center'>
      <p>{post.description}</p>
    </CardContent>

    <div className='flex flex-col items-center mt-4'>
      
      <a href={`/posts/${post.id}`}
      className={`w-full px-6 text-white bg-blue-800 rounded hover:bg-blue-400 ${isDarkBackground ? 'bg-black hover:bg-red-500': ''} `}>
      Read More</a>
    </div>
    </Card>
  ) ; 
}
