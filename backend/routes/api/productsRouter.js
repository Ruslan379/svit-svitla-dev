const express = require('express')
const router = express.Router()
const { controllerWrapper } = require("../../middlewares")
const { productsControllers: ctrl } = require("../../controllers")


router.get("/", controllerWrapper(ctrl.getAllProducts));
router.post("/", controllerWrapper(ctrl.addProduct));

module.exports = router
