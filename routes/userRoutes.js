const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  updateUserStatus,resetDeviceId
} = require("../controllers/userController");

router.get("/", getUsers);

router.post("/", createUser);

// UPDATE USER
router.put("/:id", updateUser);

//delete
router.delete("/:id", deleteUser);

router.put("/:id/status", updateUserStatus);

router.put("/:id/reset-device", resetDeviceId);

module.exports = router;