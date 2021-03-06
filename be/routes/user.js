const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { validate } = require("../models/user");
const controller = require("../controllers/user");
const validator = require("../middlewares/validate");
router.post("/login", controller.login);
router.post("/phone_check", controller.phoneCheck);
router.post("/register", validator(validate), controller.register);
router.use(auth.protect);
router.get("/address", controller.getAddress);
router.post("/address", controller.addAddress);
router.put("/address/:index", controller.updateAddress);
router.put("/:id", controller.updateOne);
router.delete("/address/:index", controller.deleteAddress);
module.exports = router;
