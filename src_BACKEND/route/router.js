const express = require("express");
const router = express.Router();
const {
  createText,
  getAllTexts,
  getTextById,
  updateText,
  deleteText,
} = require("../controller/controller");

router.get("/", getAllTexts);

router.get("/:text_id", getTextById);

router.post("/", createText);

router.put("/:text_id", updateText);

router.delete("/:text_id", deleteText);

module.exports = router;
