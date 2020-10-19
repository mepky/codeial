const passport = require("passport");

const googleStrategy = require("passport-google-oauth").OAuth2Strategy;

const crypto = require("crypto");
const User = require("../models/user");

passport.use(
    new googleStrategy({
            clientID: "998444075038-n5luvib3o12tmdo4het84bulb6ott0et.apps.googleusercontent.com",
            clientSecret: "ve3iwj52GGbxK8e9tWmOD1eH",
            callbackURL: "http://localhost:8000/user/auth/google/callback",
        },
        function(accessToken, refreshToken, profile, done) {
            User.findOne({ email: profile.emails[0].value }).exec(function(
                err,
                user
            ) {
                if (err) {
                    console.log("error in google strategy passport", err);

                    return;
                }
                console.log(accessToken, refreshToken);
                console.log(profile);

                if (user) {
                    return done(null, user);
                } else {
                    User.create({
                            name: profile.displayName,
                            email: profile.emails[0].value,
                            password: crypto.randomBytes(20).toString("hex"),
                        },
                        function(err, user) {
                            if (err) {
                                console.log(
                                    "error in creating user in google strategy passport",
                                    err
                                );
                                return;
                            }
                            return done(null, user);
                        }
                    );
                }
            });
        }
    )
);