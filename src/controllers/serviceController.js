const Service = require('../models/Service');
const { appEvents } = require('../events');

exports.create = async (req, res, next) => {
  try {
    const user = req.user;
    const payload = {
      user: user._id,
      title: req.body.title,
      ratePerHour: Number(req.body.ratePerHour || 0),
      available: req.body.available === 'false' ? false : true,
      address: req.body.address,
      description: req.body.description,
      daysAvailable: req.body.daysAvailable ? JSON.parse(req.body.daysAvailable) : (req.body.daysAvailableRaw ? req.body.daysAvailableRaw.split(',').map(s=>s.trim()) : []),
      startTime: req.body.startTime,
      endTime: req.body.endTime
    };
    const service = await Service.create(payload);
    appEvents.emit('service:created', service);
    res.status(201).json(service);
  } catch (err) { next(err); }
};

exports.listMy = async (req, res, next) => {
  try {
    const list = await Service.find({ user: req.user._id });
    res.json(list);
  } catch (err) { next(err); }
};
