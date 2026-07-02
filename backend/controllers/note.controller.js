import express from "express";
import Note from "../models/Notes.model.js";

export async function getAllNotes(req, res) {
  try {
    const allNotes = await Note.find();
    res.status(200).json(allNotes);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function createNote(req, res) {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function editNote(req, res) {
  try {
    const id = req.params.id;
    const updateID = await Note.findByIdAndUpdate(
      id,
      { title: req.body.title, content: req.body.content },
      { new: true },
    );
    if (!updateID) {
      return res.status(404).json({ message: "non existent" });
    }
    res.status(200).json(updateID);
  } catch (e) {
    res.json({ message: e.message });
  }
}

export async function deleleNote(req, res) {
  try {
    const id = req.params.id;
    const deleteId = await Note.findByIdAndDelete(id);
    if (!deleteId) {
      return res.status(404).json({ message: "non existent" });
    }
    res.status(200).json({ message: "deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
