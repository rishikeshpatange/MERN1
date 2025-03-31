const Contact = require("../models/contact-model");
const Booking = require("../models/booking-model");
const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({}, { password: 0 }); // to get all users without password
    console.log(user);
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No User Found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
const getAllcontacts = async (req, res) => {
  try {
    const user = await Contact.find(); // to get all contacts
    console.log(user);
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No contact Found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
const getAllbookings = async (req, res) => {
  try {
    const user = await Booking.find(); // to get all contacts
    console.log(user);
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No contact Found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const getAllUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updateUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Delted Successfuully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllcontacts,
  deleteUserById,
  getAllUserById,
  updateUserById,
  getAllbookings
  
};
