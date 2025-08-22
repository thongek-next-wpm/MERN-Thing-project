const express = require("express");
const {
  getAllNote,
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
} = require("../controllers/noteController.js");

const router = express.Router();

router.get("/", getAllNote);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;
