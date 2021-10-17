const express = require("express");
const router = express.Router();
const validator = require("../middlewares/validate");
const { validate } = require("../models/voucher");
const controller = require("../controllers/voucher");
router.post("/", validator(validate), controller.addOne);
router.get("/:id", controller.getOne);
router.get("/", controller.getAll);
module.exports = router;
