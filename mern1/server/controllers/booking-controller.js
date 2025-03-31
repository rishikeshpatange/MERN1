const Booking = require("../models/booking-model");

const bookingForm = async (req, res) => {
  try {
    const response = req.body
    await Booking.create(response);
    return res.status(200).json({message: "message sent sucessfully"})
  } catch (error) {
    return res.status(500).json({message: "Internal sever error"})
  }
};

module.exports = bookingForm;
