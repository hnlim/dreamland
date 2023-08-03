const Dream = require("../models/dream");

exports.getAll = async (req, res) => {
  const dreamData = await Dream.findAll({
    order: [["date", "ASC"]],
  });
  res.send(dreamData);
};

exports.getDream = async (req, res) => {
  const dreamData = await Dream.findByPk(req.params.id);
  res.send(dreamData);
};

exports.addDream = async (req, res) => {
  try {
    const dreamData = await Dream.create(req.body);
    res.status(201).send(dreamData);
  } catch (error) {
    res.status(422).send("Unable to create data");
  }
};

exports.updateDream = async (req, res) => {
  try {
    const dreamData = await Dream.findByPk(req.params.id);
    dreamData.title = req.body.title;
    dreamData.content = req.body.content;
    await dreamData.save();
    res.status(202).send(dreamData);
  } catch (error) {
    res.status(422).send("Unable to update data");
  }
};

exports.deleteDream = async (req, res) => {
  try {
    const dreamData = await Dream.findByPk(req.params.id);
    dreamData.destroy();
    res.status(202).send("Data deleted");
  } catch (error) {
    res.status(422).send("Unable to delete data");
  }
};
