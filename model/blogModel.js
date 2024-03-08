const mongoose  = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, "title is required"]
    },
    description:{
        type:String,
        required:[true, "description is required"]
    },
    author:{
        type: String,
        required: [true, "author is required"]
    },
    // image:{
    //     type:String,
    //     required:[true, "image is required"]
    // },
    isPublished : {
        type : Boolean,
    required : true,
    default : false,
    },
},
    {
        timestamps:true,
    }
)

module.exports = mongoose.model("Blog", blogSchema);