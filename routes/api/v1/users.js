const express = require("express");
const router = express.Router();

const userApi = require("../../../controllers/user_Controller");
router.post("/create-session", userApi.createSession);

module.exports = router;