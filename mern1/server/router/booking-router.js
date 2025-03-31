const express = require("express");
const bookingForm = require("../controllers/booking-controller");
const router = express.Router();


router.route("/booking").post(bookingForm)



module.exports = router;