const Blog = require("../model/blogModel")

//code to get allblogs
const getBlogs =async (req, res)=>{
    const allBlogs = await Blog.find();

    if(!allBlogs){
        res.status(400);
        throw new Error("not found");
    }
    res.status(200);
    res.json(allBlogs);
    // res.send("All Blogs here");
};

//code to get a particular searching blog
const getBlog = async(req, res)=>{
    let blog = await Blog.findById(req.params.id);

    if(!blog){
        res.status(400);
        // throw new Error("Blog not found");
    }
    res.json(blog);
}

//code to create a blog
const createBlog = async(req, res)=>{

    // res.send("blog created")
    const {title, description, author} = req.body;

    if(!title || !description || !author){
        res.status(400);
        throw new Error("All are required");
    }
    const newBlog = await Blog.create({
    title,
    description,
    author,
});
if (!newBlog) {
    res.status(401);
    throw new Error("Invalid Blog Data");
  }
res.status(200);
res.json(newBlog);

};


//code for update the blog
const updateBlog =async (req, res)=>{
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.status(200)
    res.json(updatedBlog); 
    // res.send("blog updated");
}



//code for delete the blog
const deleteBlog = async(req, res)=>{
 await Blog.findByIdAndDelete(req.params.id);
    res.json({msg:"Blog deleted"})
    // res.send("blog deleted");
};

module.exports = {getBlogs,getBlog, createBlog, updateBlog, deleteBlog}