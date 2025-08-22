const { json } = require("express");
const Note = require("../models/Note.js");
module.exports.getAllNote = async function (req, res) {
  //send all notes
  try {
    const note = await Note.find().sort({ createdAt: 1 }); //newst first
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getAllNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getNoteById = async function (req, res) {
  // send some note
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.createNote = async function (req, res) {
  //create the notes
  try {
    const { title, content } = req.body;
    const note = new Note({ title: title, content: content });
    console.log(title, content);

    const saveNote = await note.save();
    res
      .status(201)
      .json({ message: "Note created successfully", note: saveNote });
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.updateNote = async function (req, res) {
  //update the notes
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );
    if (!updateNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updateNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.deleteNote = async function (req, res) {
  //delele the notes
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
