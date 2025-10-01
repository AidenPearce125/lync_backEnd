const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    eventTitle: { type: String, required: true },
    eventcategory: { type: String, required: true },
    enddate: { type: Date, required: true },
    startdate: { type: Date, required: true },
    eventLocation: { type: String, required: true },
    eventTicketPrice: { type: Number, required: true },
    eventQuantity: { type: Number, required: true },
    eventDescription: { type: String, required: true },
    eventImage: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
