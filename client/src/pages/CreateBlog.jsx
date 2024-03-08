import React, { useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Box, Button, InputLabel, TextField, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { createfetchdata } from '../features/blogs/blogSlice'

const CreateBlog = () => {
  const {isSuccess} = useSelector(state=>state.blogs)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput]= useState({
    title:"",
    description:"",
    author:"",
    isPublished:"",
  })
 
  const {title, description, author, isPublished}=input;

  const handlechange = (e)=>{
    setInput({
      ...input,
      [e.target.name]:e.target.value  
    })
  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    dispatch(createfetchdata(input));
    if(isSuccess){
      navigate("/blogs")
    }
  }
  return (
    <>
     <form onSubmit={handlesubmit}>
      <Box width={'50%'} border={2} borderRadius={10}  padding={3} margin={"auto"} boxShadow={'10px 10px 20px #ccc'} display={'flex'} flexDirection={'column'} marginTop={'30px'}>

      <Typography variant='h3' textAlign={'center'} fontWeight={'semibold'} padding={3} color={'gray'}>
        Create a Blog
      </Typography>

      <InputLabel sx={{ mb:1, mt:2, fontSize:"24px", fontWeight:"bold" }}>Title:</InputLabel>
      <TextField name='title' value={title} onChange={handlechange} margin='normal' variant='outlined' required/>

      <InputLabel sx={{ mb:1, mt:2, fontSize:"24px", fontWeight:"bold" }}>Description:</InputLabel>
      <TextField name='description' value={description} onChange={handlechange} margin='normal' variant='outlined' required/>

      <InputLabel sx={{ mb:1, mt:2, fontSize:"24px", fontWeight:"bold" }}>Author:</InputLabel>
      <TextField name='author' value={author} onChange={handlechange} margin='normal' variant='outlined' required/>

      <InputLabel sx={{ mb:1, mt:2, fontSize:"24px", fontWeight:"bold" }}>isPublished:</InputLabel>
      <TextField name='isPublished' value={isPublished} onChange={handlechange} margin='normal' variant='outlined'/>

      <Button type='submit' color='primary' variant='contained' >SUBMIT</Button>

      </Box>
      </form> 
    </>
  )
}

export default CreateBlog
