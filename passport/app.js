const express = require("express");
const passport = require("./passport-config.js"); // Path to the passport configuration file
const session = require("express-session");
const app = express();

// /app.use(session({ … }));
app.use(passport.initialize());

app.get("/auth/google", passport.authenticate("google", {scope: ["profile"]}));

app.get(
    "/auth/google/callback",
    passport.authenticate("google", {session: false, failureRedirect: "/login"}),
    function (req, res) {
        // Successful authentication, redirect or respond with data
        res.redirect("/profile");
    }
);

// Add more routes and middleware as needed

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
