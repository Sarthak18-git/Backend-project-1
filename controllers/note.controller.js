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
const getAllNotes=async (req,res)=>{
    try{
        const notes=await Note.find();
        res.status(201).json({
            success:true,
            message:"all notes fetched",
            notes
        }); 
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        });
    }
}
const deleteNote=async(req,res)=>{
    try{
        const {id}=req.params;
        const note=await Note.deleteOne({ _id: id });
        res.status(200).json({
            success:true,
            message:"Note deleted successfully",
            note
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        });
    }
  }
  const updateNote=async(req,res)=>{
      try{
         const {id}=req.params;
         const {title,description}=req.body;
         const result=await Note.updateOne({_id:id},
            {
                title,
                description,
            },
            {
                runValidators:true,
            }
         );
         if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Note not found",
            });
        }

         res.status(200).json({
            success:true,
            message:"Note updated successfully",
            result
         });
      }
      catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        });
      }
  }

module.exports= {createNote, getAllNotes,deleteNote,updateNote};