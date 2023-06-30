const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: "633484134452-nk714c80e92t4m136p9vrgk14elptrvv.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            // You can access user data from the `profile` object
            // and perform further operations (e.g., saving to a database)
            return done(null, profile);
        }
    )
);

module.exports = passport;
