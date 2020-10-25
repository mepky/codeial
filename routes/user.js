const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_Controller");
const passport = require("passport");
const { unsubscribe } = require(".");

router.get("/sign-up", userController.SignUp);
router.get("/sign-in", userController.signIn);
router.get(
    "/profile/:id",
    passport.checkAuthentication,
    userController.profile
);
router.post("/update/:id", passport.checkAuthentication, userController.update);

router.post("/create", userController.create);

router.post(
    "/create-session",
    passport.authenticate("local", {
        failureRedirect: "/user/sign-in",
    }),
    userController.createSession
);

router.get("/logout", userController.destroySession);

router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/user/sign-in",
    }),
    userController.createSession
);
module.exports = router;