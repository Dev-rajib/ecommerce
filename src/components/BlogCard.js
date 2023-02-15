import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = props => {
  return (
   
      <div className='blog-card'>
        <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'/>
      
            <div className='blog-content'>
                    <p className='date'>1 Febc 2023</p>
                    <h5 className='title'>A beautiful sunday morning renaissance</h5>
                    <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown  </p>
                    <Link to={"/"}  className='button'>Read More</Link>
            </div>
      </div>
   
  )
}



export default BlogCard
