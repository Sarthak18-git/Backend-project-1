const mongoose=require("mongoose");
const noteSchema=new mongoose.Schema(
    {
        title:{
            type: String,
            required:[true,"title required"],
            maxLength:[100,"title should not exceed 100 characters"]
        },
        description:{
            type: String,
            required:[true,"description required"],
            maxLength:[5000,"description should not exceed 500 characters"]
        },
    },
    {
        timestamps:true
    }
);
const Note=mongoose.model("Note",noteSchema);
module.exports=Note;