const Note=require("../models/note.model");
const createNote=async (req,res)=>{
    try{
        const{title,description}=req.body;
        const note=await Note.create({title,description});
        res.status(201).json({
            success:true,
            message:"Note created successfully",
            note
        });
    }
    catch(error){
        res.status(500).json({
           success: false,
           message: error.message,
       });
    }
};
module.exports= {createNote,};