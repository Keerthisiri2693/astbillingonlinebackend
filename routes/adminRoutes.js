const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  getAdmins,
} = require("../controllers/adminController");

router.post("/signup", signup);

router.post("/login", login);

router.get("/", getAdmins);

module.exports = router;