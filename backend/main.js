//dependencies
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
//routes
import noteRouter from "./Routes/Notes.route.js";
//model

dotenv.config();

const app = express();

app.use(express.json());

app.use("/notes", noteRouter);

async function start() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT || 4000, () => {
      console.log(
        `Listening on port ${process.env.PORT} and connected to MongoDB`,
      );
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}
start();
