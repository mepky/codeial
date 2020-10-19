const express = require("express");
const passport = require("passport");
const router = express.Router();
const postApi = require("../../../controllers/api/v1/posts_api");

router.get("/", postApi.index);
router.get(
    "/:id",
    postApi.destroy,
    passport.authenticate("jwt", { session: false })
);

module.exports = router;