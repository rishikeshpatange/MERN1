const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

// create a model or collection
const Booking = model("booking", bookingSchema);
module.exports = Booking;