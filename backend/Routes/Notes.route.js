import express from "express";
import Note from "../models/Notes.model.js";
import {
  getAllNotes,
  createNote,
  editNote,
  deleleNote,
} from "../controllers/note.controller.js";
const noteRouter = express.Router();

noteRouter.get("/", getAllNotes);
noteRouter.post("/", createNote);
noteRouter.put("/:id", editNote);
noteRouter.delete("/:id", deleleNote);

export default noteRouter;
