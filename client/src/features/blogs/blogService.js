import axios from "axios"

export const getAllBlogs = async()=>{
    const response = await axios.get("/api/blog/all-blogs");
    // console.log(response);
    return response.data;
};

export const createABlog = async(input)=>{
    const response = await axios.post("/api/blog/create-blog", input);
    console.log(response);
    return response.data;
};


export const deleteBlog = async(_id)=>{
    const response = await axios.delete("/api/blog/delete-blog/" + _id);
    return response.data;
}

export const updateBlog = async ( input) =>{
    const {_id, title, description, author, image, isPublished} = input
    const response = await axios.put("/api/blog/update-blog/" + _id,{title, description, author, image, isPublished});
    return response.data;
}