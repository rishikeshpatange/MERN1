const express = require("express");
const contactForm = require("../Controlers/contact-controller");

const router = express.Router();


router.route("/contact").post(contactForm)


module.exports = router;