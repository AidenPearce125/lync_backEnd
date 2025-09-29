const Interest = require('../models/Interest');
exports.list = async (req, res, next) => {
  try {
    const items = await Interest.find();
    res.json(items);
  } catch (err) { next(err); }
};
exports.create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const it = await Interest.create({ name });
    res.status(201).json(it);
  } catch (err) { next(err); }
};
