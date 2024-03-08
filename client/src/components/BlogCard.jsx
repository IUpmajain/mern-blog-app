import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { deletefetchid,  fetchblog } from '../features/blogs/blogSlice';
// import { useNavigate } from 'react-router-dom';
import {Button} from '@mui/material'



export default function BlogCard({blog}) {
  // const navigate = useNavigate();

  const {isSuccess} = useSelector(state=>state.blogs)

  const dispatch = useDispatch();

  const handledelete = (_id)=>{
    dispatch(deletefetchid(_id))
    if(isSuccess){
      dispatch(fetchblog())
    }
  }

  // const handleedit = (_id)=>{
  //   navigate(`/modifyblogs/${_id}`);
  //   dispatch(edit(blog));
  // }
  return (
    <Card sx={{ width:"40%", margin:'auto', marginTop:"100px", padding:2, boxShadow:'5px 5px 10px #ccc', ":hover:":{boxShadow:"10px 10px 20px #ccc",} }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            blog
          </Avatar>
        }
        
        title={blog.title}
        subheader={blog.createdAt}
      />
              <Typography sx={{display:"flex" , float:'right'}}>
            {/* <Button color='warning' variant='contained' onClick={(_id)=>handleedit(blog._id, blog)}>edit</Button> */}
            <Button color='error' variant='contained' sx={{marginLeft:1}} onClick={()=>handledelete(blog._id)}>delete</Button>
        </Typography>
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blog.description}
        </Typography>

        

      </CardContent>
      
      <Typography  marginLeft={2}>UpdatedAt:</Typography>
      <CardHeader  
        subheader={blog.updatedAt}

/>
      
      
             </Card>
  );
}