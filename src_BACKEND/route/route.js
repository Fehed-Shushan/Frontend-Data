const express = require("express");
const router = express.Router();
const {
  createText,
  getAllTexts,
  getTextById,
  updateText,
  deleteText,
} = require("../controller/controller");

// Route för att hämta alla texter
router.get("/", getAllTexts);

// Route för att hämta en specifik text via ID
router.get("/:text_id", getTextById);

// Route för att skapa en ny text
router.post("/", createText);

// Route för att uppdatera en specifik text
router.put("/:text_id", updateText);

// Route för att ta bort en specifik text
router.delete("/:text_id", deleteText);

module.exports = router;
