// import React, {useEffect, useState} from 'react'
// import {useParams, useNavigate} from 'react-router-dom'
// import {Box, Button, InputLabel, TextField, Typography} from '@mui/material'
// import { useDispatch, useSelector } from 'react-redux'
// import { updatefetchTodo } from '../features/blogs/blogSlice'


// const Modifyblog = () => {

//     const {edit, isSuccess} = useSelector(state=>state.blogs)

//     const [input, setInput]= useState({
//       title:"",
//       description:"",
//       author:"",
//       isPublished:"",
//     })

//     const id = useParams().id
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

    
   
//     const {title, description, author,  isPublished}=input;
  
//     const handlechange = (e)=>{
//       setInput({
//         ...input,
//         [e.target.name]:e.target.value
//       })
//     }
   
//       const handlesubmit = (e)=>{
//         e.preventDefault();
//         if (edit.editMode) {
//           dispatch(updatefetchTodo({_id:edit.blog._id, title, description, author,  isPublished}));
//           alert("data updated")
//           if(isSuccess){
//             navigate("/blogs")
            
//           }
//         }
//       }
      
//       useEffect(()=>{
//         setInput({
//           title:edit.blog.title,
//           description:edit.blog.description,
//           author:edit.blog.author,
//           isPublished:edit.blog.isPublished,
//         })
//       },[edit])                    

//   return (
//     <>
//      <form onSubmit={handlesubmit}>
//       <Box width={'50%'} border={2} borderRadius={10}  padding={3} margin={"auto"} boxShadow={'10px 10px 20px #ccc'} display={'flex'} flexDirection={'column'} marginTop={'30px'}>

//       <Typography variant='h3' textAlign={'center'} fontWeight={'semibold'} padding={3} color={'gray'}>
//         Update Your Blog
//       </Typography>

//       <InputLabel sx={{ mb:1, mt:2, fontSize:"24px", fontWeight:"bold" }}>Title:</InputLabel>
//       <TextField name='title' value={title} onChange={handlechange} margin='normal' variant='outlined' required/>

//       <InputLabel sx={{ mb:1, mt:2, fontSize:"24px", fontWeight:"bold" }}>Description:</InputLabel>
//       <TextField name='description' value={description} onChange={handlechange} margin='normal' variant='outlined' required/>

//       <InputLabel sx={{ mb:1, mt:2, fontSize:"24px", fontWeight:"bold" }}>Author:</InputLabel>
//       <TextField name='author' value={author} onChange={handlechange} margin='normal' variant='outlined' required/>

      

//       <InputLabel sx={{ mb:1, mt:2, fontSize:"24px", fontWeight:"bold" }}>isPublished:</InputLabel>
//       <TextField name='isPublished' value={isPublished} onChange={handlechange} margin='normal' variant='outlined'/>

//       <Button type='submit' color='warning' variant='contained' >UPDATE</Button>

//       </Box>
//       </form> 
//     </>
//   )
// }

// export default Modifyblog
