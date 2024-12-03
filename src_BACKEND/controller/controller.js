const Text = require("../model/textPrompt");

// En text som skapas 
exports.createText = async (req, res) => {
  try {
    const { textField } = req.body;
    const newText = new Text({ textField });
    await newText.save();
    res.status(201).json({ message: "Text created successfully", text: newText });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to create text", error });
  }
};

// Hämta alla texter
exports.getAllTexts = async (req, res) => {
  try {
    const texts = await Text.find();
    res.status(200).json(texts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve texts", error });
  }
};

// Hämta en text via ID
exports.getTextById = async (req, res) => {
  try {
    const text = await Text.findById(req.params.text_id);
    if (!text) return res.status(404).json({ message: "Text not found" });
    res.status(200).json(text);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve text", error });
  }
};

// Uppdatera en text
exports.updateText = async (req, res) => {
  try {
    const updatedText = await Text.findByIdAndUpdate(
      req.params.text_id,
      req.body,
      { new: true }
    );
    if (!updatedText) return res.status(404).json({ message: "Text not found" });
    res.status(200).json({ message: "Text updated successfully", text: updatedText });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to update text", error });
  }
};

// Ta bort en text
exports.deleteText = async (req, res) => {
  try {
    const deletedText = await Text.findByIdAndDelete(req.params.text_id);
    if (!deletedText) return res.status(404).json({ message: "Text not found" });
    res.status(200).json({ message: "Text deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete text", error });
  }
};



