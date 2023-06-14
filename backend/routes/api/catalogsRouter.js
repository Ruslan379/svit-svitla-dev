const express = require('express')
const router = express.Router()
const { controllerWrapper } = require("../../middlewares")
const { catalogsControllers: ctrl } = require("../../controllers")

router.get("/", controllerWrapper(ctrl.getAllCatalogs));

module.exports = router
