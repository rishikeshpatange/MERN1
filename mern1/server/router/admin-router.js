const express = require("express");
const adminController = require("../controllers/admin-controller");
const adminMiddleware = require("../middleware/admin-middleware");
const authMiddleware = require("../middleware/auth-middleware");
const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getAllUserById);

router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById)

router.route("/contacts").get(authMiddleware, adminMiddleware, adminController.getAllcontacts);

router.route("/bookings").get(authMiddleware, adminMiddleware, adminController.getAllbookings);

module.exports = router; 
