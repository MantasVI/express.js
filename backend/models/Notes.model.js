import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 30,
      minLength: 3,
      required: true,
    },
    content: {
      type: String,
      minLength: 1,
      maxLength: 400,
      required: true,
    },
  },
  { timestamps: true },
);
const Note = mongoose.model("Note", noteSchema);

export default Note;
