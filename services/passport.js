const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');


const User = mongoose.model('users');
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {

    User.findOne({googleId: profile.id})
        .then((existingUser) => {
            if (existingUser) {
                //we already have a record ith the given profile Id
            }else {
               //we dont have a record with this profile Id make a new one
               new User({
                googleId: profile.id,
                displayName: profile.displayName
            }).save();

            }
        })
    
   
    // console.log('access token', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('profile', profile);

}));

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback"
  }, (accessToken, refreshToken, profile, done) => {

    new User({
        facebookId: profile.id,
        displayName: profile.displayName
    }).save();
    // console.log('access token', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('profile', profile);

}));