const express = require("express");
const router = express.Router();
const{createNote,getAllNotes,deleteNote,updateNote}=require("../controllers/note.controller");
router.post("/notes",createNote);
router.get("/notes",getAllNotes);
router.delete("/notes/:id",deleteNote);
router.put("/notes/:id",updateNote);
module.exports=router;