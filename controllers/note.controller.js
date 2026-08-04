const Note=require("../models/note.model");
const asyncHandler=require("../utils/asyncHandler");
const createNote=asyncHandler(async (req,res)=>{
    const{title,description}=req.body;
    const note=await Note.create({title,description});
    res.status(201).json({
            success:true,
            message:"Note created successfully",
            note
        });
    });
const getAllNotes=asyncHandler(async (req,res)=>{
        const notes=await Note.find();
        res.status(201).json({
            success:true,
            message:"all notes fetched",
            notes
        }); 
    });
const deleteNote=asyncHandler(async (req,res)=>{
        const {id}=req.params;
        const note=await Note.deleteOne({ _id: id });
        res.status(200).json({
            success:true,
            message:"Note deleted successfully",
            note
        });
    });
  const updateNote=asyncHandler(async (req,res)=>{
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
        });

module.exports= {createNote, getAllNotes,deleteNote,updateNote};