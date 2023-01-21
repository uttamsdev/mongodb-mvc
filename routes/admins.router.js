const express = require("express");
const adminsController = require("../controllers/admin.controller");
const adminRouter = express.Router();

adminRouter.route("/").get(adminsController.getAdmins);

module.exports = adminRouter;