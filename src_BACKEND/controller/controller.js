const User = require("../model/textPrompt");

exports.createUser = async (req, res) => {
  try {
    const { textField } = req.body;
    const newUser = new User({ textField });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Text sent", textField });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "no text send", error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const Text = await  Text.find();
    res.status(200).json(Texts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error, Can`t get text", error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const Text = await Text.findById(req.params.user_id);
    if (!Text) return res.status(404).json({ message: "Text not found" });
    res.status(200).json(Text);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error, Can`t get text", error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedTexts = await Texts.findByIdAndUpdate(
      req.params.user_id,
      req.body,
      { new: true }
    );
    if (!updatedTexts)
      return res.status(404).json({ message: "Texts not found" });
    res
      .status(200)
      .json({ message: "The Text is successfully updated", Texts: updatedTexts });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error updating the text", error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedTexts = await Texts.findByIdAndDelete(req.params.user_id);
    if (!deletedTexts)
      return res.status(404).json({ message: "Text not found" });
    res.status(200).json({ message: "Text is successfully deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting Text", error });
  }
};
