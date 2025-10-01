const Event = require("../models/Events");

exports.createEvent = async (req, res, next) => {
  try {
    const user = req.user;
    const payload = {
      user: user._id,
      eventTitle: req.body.eventTitle,
      eventcategory: req.body.eventcategory,
      enddate: req.body.enddate,
      startdate: req.body.startdate,
      eventLocation: req.body.eventLocation,
      eventTicketPrice: req.body.eventTicketPrice,
      eventQuantity: req.body.eventQuantity,
      eventDescription: req.body.eventDescription,
      eventImage: req.body.eventImage,
    };
    const event = await Event.create(payload);
    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};

exports.listMyEvents = async (req, res, next) => {
  try {
    const user = req.user;
    const events = await Event.find({ user: user._id });
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};
