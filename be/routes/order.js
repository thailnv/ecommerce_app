const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const controller = require("../controllers/order");
router.use(auth.protect);
router.put("/:id", controller.updateOne);
router.get("/:id", controller.getOne);
router.get("/", controller.getAllCustomer);
module.exports = router;
