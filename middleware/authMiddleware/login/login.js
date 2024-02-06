require('dotenv').config()
const passport = require('passport');
const passportJWT = require('passport-jwt');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Strategy, ExtractJwt } = passportJWT;

const User=require('../../../model/staff/staff')

const secret_key=process.env.SECRET_kEY;

// Configure Passport to use the JWT strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret_key
};

passport.use(
    new Strategy(jwtOptions, async (payload, done) => {
        try {
            // Find the user by ID
            const user = await User.findById(payload.id);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }
    })
);
const login = async  () => {

}