const Skill = require("../models/Skill");
exports.list = async (req, res, next) => {
  try {
    const items = await Skill.find();
    res.json(items);
  } catch (err) {
    next(err);
  }
};
exports.create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const it = await Skill.create({ name });
    res.status(201).json(it);
  } catch (err) {
    next(err);
  }
};
