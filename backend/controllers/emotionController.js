const Emotion = require("../models/emotion");

exports.getAll = async (req, res) => {
  const emotionData = await Emotion.findAll();
  res.send(emotionData);
};
