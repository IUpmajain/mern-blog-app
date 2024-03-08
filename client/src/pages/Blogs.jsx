import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchblog } from '../features/blogs/blogSlice'
import BlogCard from '../components/BlogCard';

const Blogs = () => {

  const dispatch = useDispatch();

  const {blogs, isLoading, isError, isSuccess} = useSelector((state)=>state.blogs);

  useEffect(()=>{
    dispatch(fetchblog());
  },[])

if(isLoading){
  <h1>load...</h1>
}

if(isError){
  <h1>error</h1>
}

  if(isSuccess){
    return (
      <div>
        {
          blogs.map((blog)=>(
            <BlogCard key={blog._id} blog={blog}/>
          ))
        }
      </div>
    )
  }
}

export default Blogs;
