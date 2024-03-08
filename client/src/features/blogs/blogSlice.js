import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createABlog } from "./blogService";
import {  createABlog, deleteBlog, getAllBlogs, updateBlog } from "./blogService.js";

const blogSlice = createSlice({
    name:"blogs",
    initialState:{
        isLoading:false,
        isSuccess:false,
        isError:false,
        blogs:[],
        edit:{
            blog:{},
            editMode:false,
        },
    },
    reducers:{
        edit:(state, action)=>{
            return{
                ...state,
                edit:{blog:action.payload, editMode:true},
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchblog.pending, (state)=>{
            state.isLoading=true;
        })

        .addCase(fetchblog.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.blogs=action.payload;
        })
        .addCase(fetchblog.rejected,(state)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.blogs=null;
        })

        .addCase(createfetchdata.fulfilled, (state,action)=>{
            state.isSuccess=true;
            // state.blogs=action.payload;
        })


        .addCase(deletefetchid.pending, (state)=>{
            state.isLoading=true;
            state.isSuccess=false;
        })

        .addCase(deletefetchid.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            // state.blogs=action.payload;
        })
        .addCase(deletefetchid.rejected,(state)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            // state.blogs=null;
        })


        .addCase(updatefetchTodo.pending, (state)=>{
            state.isLoading=true;
            state.isSuccess=false;
        })

        .addCase(updatefetchTodo.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.blogs=state.blogs.map(item=>item._id===action.payload._id?action.payload:item);
            state.edit={blog:{}, editMode:false}
            // state.blogs=action.payload;
        })

        .addCase(updatefetchTodo.rejected,(state)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.blogs=null;
        })

    },
});

export const {edit}=blogSlice.actions;

export default blogSlice.reducer;

export const fetchblog = createAsyncThunk("FETCH/BLOG", async()=>{
    try {
        return await getAllBlogs();
    } catch (error) {
        console.log(error);
    }
})

export const createfetchdata = createAsyncThunk("CREATE/BLOG", async(input)=>{
    try {
        return await createABlog(input);
    } catch (error) {
        console.log(error);
    }
})

export const deletefetchid = createAsyncThunk("DELETE/BLOG", async(_id)=>{
    try {
        return await deleteBlog(_id);
    } catch (error) {
        console.log(error)
    }
})

export const updatefetchTodo = createAsyncThunk("UPDATE/BLOG", async(input)=>{
    try {
        return await updateBlog(input);
    } catch (error) {
        console.log(error)
    }
})